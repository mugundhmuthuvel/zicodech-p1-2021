import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Pagination from "./Pagination";

it('Pagination Pages are properly working', () => {
  const container = render(
    <Pagination onNextClicked={() => {}} onPrevClicked={() => {}} page={1} total={10} />
  )
  /* Expecting 2 Dashboards - Title & Breadcrumb */
  expect(container.getAllByText(/1 of 10 page\(s\)/i).length).toEqual(1);
});

it('Pagination Button firing props next-btn', () => {
  const dummyClickBtnFn = jest.fn();
  const { getByRole } = render(
    <Pagination onNextClicked={dummyClickBtnFn} onPrevClicked={() => {}} page={1} total={10} />
  );
  fireEvent.click(getByRole("button", { name: /next-btn/i }));
  expect(dummyClickBtnFn).toHaveBeenCalled();
});

it('Pagination Button firing props prev-btn', () => {
  const dummyClickBtnFn = jest.fn();
  const { getByRole } = render(
    <Pagination onPrevClicked={dummyClickBtnFn} onNextClicked={() => {}} page={3} total={100} />
  );
  fireEvent.click(getByRole("button", { name: /prev-btn/i }));
  expect(dummyClickBtnFn).toHaveBeenCalled();
});
