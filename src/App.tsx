import React from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchBox from './SearchBox';

const App: React.FC = () => {

  const searchThings = (user: string) => {
    console.log('<< searching things of user >>', user)
  }

  return (
    <div className="App">
      <SearchBox search={searchThings}></SearchBox>
    </div>
  );
}

export default App;
