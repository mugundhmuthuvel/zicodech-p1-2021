import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import { Router } from 'react-router-dom';
import App from "./App";

it('Check if App renders properly', () => {
  const history = createMemoryHistory();
  const container = render(
    <Router history={history as any} >
      <SnackbarProvider>
        <App />
      </SnackbarProvider>
    </Router>
  )
  /* Expecting 2 Dashboards - Title & Breadcrumb */
  expect(container.getAllByTestId(/base-cntr/i).length).toEqual(1);
});
