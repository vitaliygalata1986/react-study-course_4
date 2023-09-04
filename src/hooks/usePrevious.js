import { useRef, useEffect } from 'react';

// useRef - может работать в качестве ссылки на какую-то node
// но также может хранить что-то внутри себя в объекте внутри ключа current {current}
// по умолчанию в момент инициализации если мы ничего не передаем, он хранит null {current:null}
function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    // когда функция usePrevious повторно вызывается
    // отрабатывает предыдущий useEffect, который это значение изменяет
    ref.current = value;
  });

  return ref.current;
}

export { usePrevious };
