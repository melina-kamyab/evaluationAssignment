import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import CreditCardForm from './CreditCardForm';

test('Check for label: Card Number', () => {
  render(<CreditCardForm />);
  const checkLabel = screen.getByText(/Card Number/i);
  expect(checkLabel).toBeInTheDocument();
});

test('Check input value for card number', () => {
  render(<CreditCardForm />);
  const input = screen.getByTestId('credit-card-number-id');
  fireEvent.change(input, {target: {value: '1234 5678 9123 4567'}});

  const ckeckCardNumbers = screen.getByText(/1234 5678 9123 4567/i);
  expect(ckeckCardNumbers).toBeInTheDocument();
});

test('Check for existing input values', () => {
  render(<CreditCardForm />);
  const number = screen.getByTestId('credit-card-number-id');
  fireEvent.change(number, {target: {value: '1465 5678 9165 4567'}});

  const name = screen.getByTestId('name-id');
  fireEvent.change(name, {target: {value: 'Melina'}});
  const newValueName = screen.getByText(/Melina/i);
  expect(newValueName).toBeInTheDocument();

  const month = screen.getByTestId('month-id');
  fireEvent.change(month, {target: {value: '01'}});
  const newValueMonth = screen.getAllByText(/01/i)[0];
  expect(newValueMonth).toBeInTheDocument();

  const year = screen.getByTestId('year-id');
  fireEvent.change(year, {target: {value: '23'}});
  const newValueYear = screen.getAllByText(/23/i)[0];
  expect(newValueYear).toBeInTheDocument();

  const cvc = screen.getByTestId('cvc-id');
  fireEvent.change(cvc, {target: {value: '333'}});
  const newValueCvc = screen.getAllByText(/333/i)[0];
  expect(newValueCvc).toBeInTheDocument();

  const button = screen.getByTestId('button-id');
  fireEvent.click(button);
});
