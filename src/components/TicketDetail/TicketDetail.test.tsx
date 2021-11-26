import '@testing-library/jest-dom';
import { cleanup, render, wait, waitFor, waitForElement } from '@testing-library/react';
import { createLocation, createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';
import { getTicketById } from '../../axios/zdapis/zdapis.service';
import ticketResponse from '../../fixtures/response';
import TicketDetail from "./TicketDetail";

const history = createMemoryHistory();
const path = `/tickets/:ticket_id`;
history.push("/tickets/1");
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

afterEach(cleanup);

it('Load component and check loading', async () => {
    const { getByTestId } = render(
        <Router history={history as any} >
         <TicketDetail {...{ location, match, history, route, routeParams: routeParams as any }}/>
        </Router>
    )
    /* Checking to empty as spinner wont have any content and page wont have content before api call*/
    expect(getByTestId("loader")).toHaveTextContent("");
});

it('Load component beyond loading whether component renders the values from api', async () => {
    //@ts-ignore
    (getTicketById as jest.mock).mockReturnValue(ticketResponse);
    const { findByText } = render(
        <Router history={history as any} >
         <TicketDetail {...{ location, match, history, route, routeParams: routeParams as any }}/>
        </Router>
    )
    const elementLookingFor = await findByText(/Sample ticket: Meet the ticket/);
    expect(elementLookingFor).toBeInTheDocument();
});