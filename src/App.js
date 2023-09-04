import { useState } from 'react';
import './App.css';
import { usePrevious } from './hooks/usePrevious';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [count, setCount] = useLocalStorage(0, 'count');
  const prevCount = usePrevious(count);
  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>Update</button>
      <h2>Current: {count}</h2>
      <h2>Prevoius: {prevCount}</h2>
    </div>
  );
}

export default App;
