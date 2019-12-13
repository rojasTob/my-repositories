import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import RepositoriesList from "./RepositoriesList";

let container: any;

describe('RepositoriesList', () => {

  describe('when props are set up', () => {
    const data = [
      { name: 'name1', created_at: 'date1', updated_at: 'date2' },
      { name: 'name2', created_at: 'date1', updated_at: 'date2' }
    ];

    const message = 'a message here';

    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);

      act(() => {
        render(<RepositoriesList list={data} message={message} />, container);
      });

    });

    afterEach(() => {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    });

    test('has an Alert component and display the props.message', () => {
      const alertMessage = container.querySelector('[id="alertMessage"]');
      expect(alertMessage.textContent).toBe('a message here');
    });

    // test('has a table with the values on props.list', () => {
    //   const table = container.querySelector('[id="repos"]');
    // });
  });
});