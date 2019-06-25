import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [test, setTest] = useState('foo');

  useEffect(() => {
    fetch('/testing')
      .then(res => res.text())
      .then(setTest);
  }, [test]);

  return (
    <div className="App">
      <p>{ test }</p>
    </div>
  );
}

export default App;
