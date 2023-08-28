import { useState, useEffect } from 'react';

function Clicker() {
  const [count, setCount] = useState(0);

  const handleClick = (params) => {
    params === 'plus' ? setCount(count + 1) : setCount(count - 1);
  };

  useEffect(() => {
    console.log('Hello form clicker');

    return () => console.log('goodbye clicker');
  }, [count]); // функция, которую мы хотим запустить в какой-то момент жизненного цикла, и некий набор зависимостей

  return (
    <div>
      <button onClick={() => handleClick('minus')}>-</button>
      {count}
      <button onClick={() => handleClick('plus')}>+</button>
    </div>
  );
}

export default Clicker;
