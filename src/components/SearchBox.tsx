import React, { useState } from 'react';
import {Form, Button, Col, Row} from 'react-bootstrap';

interface SearchBoxProps {
  search: (user: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = (props: SearchBoxProps) => {
  const [user, setUser] = useState('');

  const handlerUser = (e: React.ChangeEvent<HTMLInputElement>) => setUser(e.target.value);

  return(
    <div className='margins-between-components'>
      <Form>
        <Form.Group as={Row} controlId="formRepoUser">
          <Form.Label column sm={3}>
            Github user
          </Form.Label>
          <Col sm={7}>
          <Form.Control type="text" placeholder="Enter username" value={user} onChange={handlerUser}/>
          </Col>
          <Col sm={2}>
            <Button onClick={() => props.search(user)}>
              Let's search!!
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default SearchBox;