import { useReducer } from 'react';
import { useEffect } from 'react';

const countReducer = (state, { type }) => {
  if (type === 'START') {
    return {
      ...state,
      isCounting: true,
    };
  }

  if (type === 'STOP') {
    return {
      ...state,
      isCounting: false,
    };
  }

  if (type === 'RESET') {
    return {
      count: 0,
      isCounting: false,
    };
  }

  if (type === 'TICK') {
    return {
      ...state,
      count: state.count + 1,
    };
  }

  return state;
};

function setDefaultValue() {
  const userCount = localStorage.getItem('timer');
  return userCount ? +userCount : 0;
}

function Timer() {
  //const [count, setСount] = useState(setDefaultValue());
  //const [isCounting, setIsCount] = useState(false);

  const [{ count, isCounting }, dispatch] = useReducer(countReducer, {
    count: setDefaultValue(),
    isCounting: false,
  });

  useEffect(() => {
    // console.log('update');
    localStorage.setItem('timer', count);
  }, [count]);

  useEffect(() => {
    let timerId = null;
    if (isCounting) {
      timerId = setInterval(() => {
        // setСount((prevCount) => prevCount + 1);
        dispatch({ type: 'TICK' });
      }, 1000);
    }
    // размонтирование
    return () => {
      console.log('unmount');
      timerId && clearInterval(timerId);
      timerId = null;
    };
  }, [isCounting]);

  return (
    <div>
      <h3>{count}</h3>
      {!isCounting ? (
        <button onClick={() => dispatch({ type: 'START' })}>Start</button>
      ) : (
        <button className="btn" onClick={() => dispatch({ type: 'STOP' })}>
          Stop
        </button>
      )}
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
}

export default Timer;
