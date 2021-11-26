import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { ticketResponse } from '../../../fixtures/response';
import TableRow from './TableRow';

it('Check whether Table row is rendered properly', () => {
  const history = createMemoryHistory();
  const onRowClick = jest.fn();
  const container = render(
    <TableRow ticket={ticketResponse} onClick={onRowClick} />
  )
  expect(container.getAllByText("open").length).toBeGreaterThan(0);
});

it('Check whether Table row is rendered properly', () => {
  const history = createMemoryHistory();
  const onRowClick = jest.fn();
  const container = render(
    <TableRow ticket={ticketResponse} onClick={onRowClick} />
  )
  fireEvent.click(container.getByTestId("tr-row"));
  expect(onRowClick).toHaveBeenCalled();
});
