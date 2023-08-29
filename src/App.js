import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState({
    count: 0,
    isCounting: false,
  });

  const [value, setValue] = useState(() => {
    return 10;
  });

  const [someValue, setSomeValue] = useState(0);

  useEffect(() => {
    console.log('someValue', someValue);
  }, [someValue]);

  useEffect(() => {
    console.log('state', state);
  }, [state]);

  const handleCount = () => {
    setState({
      ...state, // все существующие ключи будут скопированы в state
      count: state.count + 1,
    });
  };

  const handleStatus = () => {
    setState({
      ...state,
      isCounting: !state.isCounting,
    });
  };

  const cliker = () => {
    setValue((prevValue) => {
      return prevValue + 1;
    });
  };

  const handleSomeValue = () => {
    // setSomeValue((prevValue) => {
    //   return prevValue + 1;
    // });
    setSomeValue(someValue + 1);
  };

  return (
    <div className="App">
      <button onClick={handleCount}>Change count</button>
      <button onClick={handleStatus}>Change status</button>
      <button onClick={handleSomeValue}>Change somevalue</button>
      value: {value} | someValue: {someValue}
      <button onClick={cliker}>Click</button>
    </div>
  );
}

export default App;
