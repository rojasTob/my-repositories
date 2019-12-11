import React, {useState} from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap';
import SearchBox from './components/SearchBox';
import RepositoriesList from './components/RepositoriesList';

import {getProjectsByUser} from './services/github-services';

const App: React.FC = () => {

  const [repositories, setRepositories] = useState([{name: '', created_at: '', updated_at: ''}]);
  const [message, setMessage] = useState('First, enter a valid Github username :)');

  const searchThings = async(user: string) => {
    const data = await getProjectsByUser(user);
      setRepositories(data.repositories);
      setMessage(data.message);
  };

  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col className="App-header">React with Hooks</Col>
        </Row>
        <Row>
          <Col sm={12}><SearchBox search={searchThings}></SearchBox></Col>
        </Row>
        <Row>
          <Col sm={12}><RepositoriesList list={repositories} message={message}></RepositoriesList></Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
