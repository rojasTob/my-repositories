import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act, Simulate } from 'react-dom/test-utils';

import SearchBox from './SearchBox';

let container: any;
const searchFn = jest.fn();

describe('SearchBox', () => {

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);

    act(() => {
      render(<SearchBox search={searchFn} />, container);
    });

  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  test('has an input "username" field', () => {
    const input = container.querySelector('[id=username]');
    expect(input).not.toBe(null);
  });

  test('has a button', () => {
    const button = container.querySelector('[id=searchButton]');
    expect(button).not.toBe(null);
  });

  test('changes the user state when typing text on input "username"', () => {
    const input = container.querySelector('[id=username]');
    Simulate.change(input, { target: { value: 'a-user-name' } } as any); //TODO 'any' is not a good solution :(
    expect(input.value).toBe("a-user-name");
  });

  test('executes the function when clicking the button', () => {
    const input = container.querySelector('[id=username]');
    Simulate.change(input, { target: { value: 'a-user-name' } } as any);

    const button = container.querySelector('[id=searchButton]');
    Simulate.click(button);
    expect(searchFn).toBeCalledWith('a-user-name');
  });
});