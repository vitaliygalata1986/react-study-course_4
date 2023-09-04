import React, { useEffect, useState } from 'react';

function useLocalStorage(initialState, key) {
  const get = () => {
    const storage = localStorage.getItem(key);
    return storage ? +storage : initialState;
  };

  const [value, setValue] = useState(get); // внутри useState функция get вызовится сама

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value]);

  return [value, setValue];
}

export { useLocalStorage };
