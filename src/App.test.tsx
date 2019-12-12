import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from "react-dom/test-utils";

import App from './App';

let container: any;

const searchFn = jest.fn();

jest.mock('./components/SearchBox', () => 'search-box');
jest.mock('./components/RepositoriesList', () => 'repositories-list');

describe('App', () => {
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);

    act(() => {
      render(<App />, container);
    });

  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  test('has the title app', () => {
    const title = container.querySelector('.App-header');
    expect(title.textContent).toBe('React with Hooks');
  });

  test('has SearchBox component', () => {
    const searchBox = container.querySelector('search-box');
    expect(searchBox).not.toBe(null);
  });

  test('has RepositoriesList component', () => {
    const repositoriesList = container.querySelector('repositories-list');
    expect(repositoriesList).not.toBe(null);
  });
});
