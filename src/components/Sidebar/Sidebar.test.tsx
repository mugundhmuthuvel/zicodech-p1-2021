import '@testing-library/jest-dom'
import { cleanup, fireEvent, render, RenderResult, screen } from '@testing-library/react';
import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom'
import Sidebar from "./Sidebar";
import App from '../../App';
import { SnackbarProvider } from 'notistack';

let container: RenderResult = {} as RenderResult;
let history = null;

beforeEach(() => {
  history = createMemoryHistory();
  container = render(
    <Router history={history as any} >
      <SnackbarProvider>
        <Sidebar />
      </SnackbarProvider>
    </Router>
  )
});

afterAll(cleanup);

it('Checking for sidebar Links to be properly linked', () => {
  let link = screen.getByRole('link', { name: /home-btn/i });
  expect(link.getAttribute('href')).toBe('/');
  link = screen.getByRole('link', { name: /tickets-btn/i });
  expect(link.getAttribute('href')).toBe('/tickets');
});

it('Pagination Button firing snackbar for Pawfi Button', () => {
  fireEvent.click(container.getByTestId("sb-pawfi"));
  expect(screen.getByText("Thanks for the Paw-Fi. I needed a logo. Used Paw icon instead :)")).toBeInTheDocument();
});

it('Pagination Button firing snackbar for info button', () => {
  fireEvent.click(container.getByTestId("sb-info"));
  expect(screen.getByText("Built in love with React. A micro application by Mugundh Muthuvel")).toBeInTheDocument();
});
