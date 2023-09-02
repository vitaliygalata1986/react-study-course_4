import './App.css';
import { useState, useCallback } from 'react';
import CountButton from './components/CountButton';

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  // const increment1 = () => setCount1((c) => c + 1);
  const increment1 = useCallback(() => setCount1((c) => c + 1), []);
  // const increment2 = () => setCount2((c) => c + 1);
  const increment2 = useCallback(() => setCount2((c) => c + 1), []);

  return (
    <>
      <CountButton count={count1} onClick={increment1}></CountButton>
      <CountButton count={count2} onClick={increment2}></CountButton>
    </>
  );
}

export default App;
