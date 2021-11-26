import '@testing-library/jest-dom';
import { cleanup, render, RenderResult, wait, waitFor, waitForElement } from '@testing-library/react';
import { createLocation, createMemoryHistory } from 'history';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import { Router } from 'react-router-dom';
import { getTicketById, getTickets, getUserById } from '../../axios/zdapis/zdapis.service';
import ticketResponse, { multipleTicketDataResp, userDataResp } from '../../fixtures/response';
import TicketsList from "./TicketsList";

const history = createMemoryHistory();
const path = `/tickets`;
const match = {
    isExact: false,
    path,
    url: path.replace(':id', '1'),
    params: { id: "1" }
};

const location = createLocation(match.url);
const route = {};
const routeParams = {};

jest.mock('../../axios/zdapis/zdapis.service');

let container: RenderResult = {} as RenderResult;

beforeEach(() => {
  container = render(
    <Router history={history as any} >
      <SnackbarProvider>
        <TicketsList />
      </SnackbarProvider>
    </Router>
  )
});

afterEach(cleanup);

it('Load component and check loading', async () => {
    expect(container.getByTestId("loader")).toHaveTextContent("");
});

it('Load Tickets List component beyond loading whether component renders based on values from api', async () => {
    //@ts-ignore
    (getTickets as jest.mock).mockReturnValue(multipleTicketDataResp);
    //@ts-ignore
    (getUserById as jest.mock).mockReturnValue(userDataResp);
    const elementLookingFor = await container.findByTestId("tkt-tbody");
    expect(elementLookingFor).toBeInTheDocument();
});
