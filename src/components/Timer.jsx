import { useState, useEffect, useRef } from 'react';

function setDefaultValue() {
  const userCount = localStorage.getItem('timer');
  return userCount ? +userCount : 0;
}

function Timer() {
  const [count, setСount] = useState(setDefaultValue());
  const [isCounting, setIsCount] = useState(false);
  const timerIdRef = useRef(null);
  console.log('render');

  const startTimer = () => {
    setIsCount(true);
  };

  const stopTimer = () => {
    setIsCount(false);
  };

  const resetTimer = () => {
    setСount(0);
    setIsCount(false);
  };

  useEffect(() => {
    console.log('update');
    localStorage.setItem('timer', count);
  }, [count]);

  useEffect(() => {
    if (isCounting) {
      timerIdRef.current = setInterval(() => {
        setСount((prevCount) => prevCount + 1);
      }, 1000);
    }
    // размонтирование
    return () => {
      console.log('unmount');
      timerIdRef.current && clearInterval(timerIdRef.current);
      timerIdRef.current = null;
    };
  }, [isCounting]);

  return (
    <div>
      <h3>{count}</h3>
      {!isCounting ? (
        <button onClick={startTimer}>Start</button>
      ) : (
        <button className="btn" onClick={stopTimer}>
          Stop
        </button>
      )}
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Timer;
