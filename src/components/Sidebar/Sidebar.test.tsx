import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom'
import Sidebar from "./Sidebar";
import App from '../../App';
import { SnackbarProvider } from 'notistack';

it('Checking for sidebar Links to be properly linked', () => {
  const history = createMemoryHistory();
  const container = render(
    <Router history={history as any} >
      <SnackbarProvider>
        <Sidebar />
      </SnackbarProvider>
    </Router>
  )
  let link = screen.getByRole('link', { name: /home-btn/i });
  expect(link.getAttribute('href')).toBe('/');
  link = screen.getByRole('link', { name: /tickets-btn/i });
  expect(link.getAttribute('href')).toBe('/tickets');
});
