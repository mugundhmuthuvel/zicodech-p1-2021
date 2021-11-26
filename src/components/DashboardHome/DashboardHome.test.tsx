import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom'
import DashboardHome from "./DashboardHome";
import App from '../../App';

it('Check if dashboard is rendered properly', () => {
  const history = createMemoryHistory();
  const container = render(
    <DashboardHome />
  )
  /* Expecting 2 Dashboards - Title & Breadcrumb */
  expect(container.getAllByText(/MagicHat/i).length).toEqual(1);
});
