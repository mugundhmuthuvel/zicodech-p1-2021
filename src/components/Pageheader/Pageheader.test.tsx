import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';
import Pageheader from "./Pageheader";

it('Rendering Page header in / to check for dashboard', () => {
  const history = createMemoryHistory();
  const container = render(
    <Router history={history as any} >
      <Pageheader />
    </Router>
  )
  /* Expecting 2 Dashboards - Title & Breadcrumb */
  expect(container.getAllByText(/Dashboard/i).length).toEqual(2);
});

it('Rendering Page header in /tickets to check for dashboard', () => {
  const history = createMemoryHistory();
  history.push("/tickets");
  const container = render(
    <Router history={history as any} >
      <Pageheader />
    </Router>
  )
  /* Checking if Tickets keyword id rendered in both breadcrumb and the title */
  expect(container.getAllByText(/Tickets/i).length).toEqual(2);
  /* Checking if the keyword Tickets List is rendered only in Breadcrumb as this is the only place where title != breadcrumb */
  expect(container.getAllByText(/Tickets List/i).length).toEqual(1);
});
