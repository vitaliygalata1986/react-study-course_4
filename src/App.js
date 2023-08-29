import { useEffect, useState } from 'react';
import './App.css';

function App() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    console.log('start');
  }, [count]);

  useEffect(() => {
    const handler = () => {
      setCount(count + 1);
      console.log('work');
    };

    document.addEventListener('click', handler);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  return <div className="App">{count}</div>;
}

export default App;
