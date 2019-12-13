import React from "react";
import { Table, Alert } from 'react-bootstrap';
import { RepositoryData } from '../services/github-services';

interface RepositoriesProps {
  list: RepositoryData[];
  message: string;
}


const RepositoriesList: React.FC<RepositoriesProps> = (props: RepositoriesProps) => {
  return (
    <div className='margins-between-components'>
      <Alert id='alertMessage' variant='secondary'>{props.message}</Alert>
      <Table id='repos' striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Created</th>
            <th>Updated</th>
          </tr>
        </thead>
        <tbody>
          {props.list.map((repo: any) => (
            <tr key={repo.name}>
              <td>{repo.name}</td>
              <td>{repo.created_at}</td>
              <td>{repo.updated_at}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default RepositoriesList;