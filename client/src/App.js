import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import './App.css';

function App() {
  const [test, setTest] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(setTest);
  }, []);

  const listUser = (user, index) => (
    <p key={index}>
      {user.id}
      -
      {user.name}
      -
      {user.email}
    </p>
  );

  const testing = () => {
    fetch('/api/users', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Elaine',
        email: 'Elaine@example.com',
      }),
    });
  };

  return (
    <div className="App">
      {test !== undefined ? test.map(listUser) : ''}
      <Button variant="contained" color="primary" onClick={testing}>Click me</Button>
    </div>
  );
}

export default App;
