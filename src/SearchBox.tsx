import React, { useState } from 'react';

export default function SearchBox(props: any) {
  const [user, setUser] = useState('');

  const handlerUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('<< handlerUser >>');
    setUser(e.target.value);
  }

  return (
    <>
      <label>Search repositories on Github</label>
      <input type="text" value={user} onChange={handlerUser} />
      <button onClick={() => props.search(user)}>Let's search!!</button>
    </>
  );
}