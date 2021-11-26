import '@testing-library/jest-dom';
import { cleanup, findByTestId, render } from '@testing-library/react';
import { createLocation, createMemoryHistory } from 'history';
import React from 'react';
import { getUserById } from '../../../axios/zdapis/zdapis.service';
import { userDataResp } from '../../../fixtures/response';
import User from "./User";

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

jest.mock('../../../axios/zdapis/zdapis.service');

afterEach(cleanup);

it('Load User component and check loading', async () => {
    const { getByTestId } = render(
         <User user="1903993788153"/>
    );
    /* Checking to empty as spinner wont have any content and page wont have content before api call*/
    expect(getByTestId("user-loader")).toHaveTextContent("");
});

it('Load User component beyond loading whether component renders the values from api', async () => {
    //@ts-ignore
    (getUserById as jest.mock).mockReturnValue(userDataResp);
    const { findByTestId } = render(
         <User user="1903993788153"/>
    );
    const elementLookingFor = await findByTestId("user-name");
    expect(getUserById).toHaveBeenCalled();
});