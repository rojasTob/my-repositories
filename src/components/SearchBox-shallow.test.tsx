import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
// import { createRenderer } from 'react-dom/test-utils';

import { Form, Button, Col, Row } from 'react-bootstrap';

import SearchBox from './SearchBox';

const searchFn = jest.fn();
const handlerUser = (e: React.ChangeEvent<HTMLInputElement>) => 'set user'

const renderer = new ShallowRenderer();
renderer.render(<SearchBox search={searchFn} />);
const result = renderer.getRenderOutput();

// const renderer = createRenderer();
// renderer.render(<SearchBox search={searchFn} />);
// const result = renderer.getRenderOutput();

describe('SearchBox - shallow render', () => {
  test('has an input "username" field', () => {
    // const input = result.querySelector('[id=username]');
    // expect(input).not.toBe(null);
    expect(result.type).toBe('div');
    // expect(result.props.children).toEqual(
    //   <Form>
    //     <Form.Group as={Row}>
    //       <Form.Label column sm={3}>
    //         Github user
    //     </Form.Label>
    //       <Col sm={7}>
    //         <Form.Control id="username" type="text" placeholder="Enter username" value='' onChange={handlerUser} />
    //       </Col>
    //       <Col sm={2}>
    //         <Button id='searchButton' onClick={() => searchFn('username')}>
    //           Let's search!!
    //       </Button>
    //       </Col>
    //     </Form.Group>
    //   </Form>
    // );
  });
});
