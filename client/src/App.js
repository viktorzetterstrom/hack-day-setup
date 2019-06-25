import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [test, setTest] = useState([]);

  useEffect(() => {
    fetch('/users')
      .then(res => res.json())
      .then(setTest);
  }, []);

  const listUser = user => (
    <p>
      {user.id}
      -
      {user.name}
      -
      {user.email}
    </p>
  );

  return (
    <div className="App">
      {test !== undefined ? test.map(listUser) : ''}
    </div>
  );
}

export default App;
