import { useReducer } from 'react';
import './App.css';

const limitRGB = (num) => (num < 0 ? 0 : num > 255 ? 255 : num);
const step = 50;

const reducer = (state, { type, payload = step }) => {
  // принимает текущее состояние нашего приложения, и некое действие
  // { type, payload = step } деструктуризируем от action, а action - это объект
  switch (type) {
    case 'INCREMENT_R':
      return {
        ...state, // возвращаем наружу стейт, но заменяем его один ключ
        r: limitRGB(state.r + payload),
      };
    case 'DECREMENT_R':
      return {
        ...state,
        r: limitRGB(state.r - payload),
      };
    case 'INCREMENT_G':
      return {
        ...state,
        g: limitRGB(state.g + payload),
      };
    case 'DECREMENT_G':
      return {
        ...state,
        g: limitRGB(state.g - payload),
      };
    case 'INCREMENT_B':
      return {
        ...state,
        b: limitRGB(state.b + payload),
      };
    case 'DECREMENT_B':
      return {
        ...state,
        b: limitRGB(state.b - payload),
      };
    default:
      return state;
  }
};

// dispatch - функция обновления

function App() {
  const [{ r, g, b }, dispatch] = useReducer(reducer, { r: 0, g: 150, b: 200 }); // useReducer принимает reducer и некое изначальное состояние { r: 0, g: 150, b: 200 }
  // useReducer здесь возращает функцию dispatch для создания событий
  // принял и вернул некое начальное значение  const [{ r, g, b }
  return (
    <div className="App">
      <h1
        style={{
          color: `rgb(${r}, ${g}, ${b})`,
        }}
      >
        Hello CodeSandbox
      </h1>
      <div>
        <span>r </span>
        <button onClick={() => dispatch({ type: 'INCREMENT_R', payload: 100 })}>
          +
        </button>
        <button onClick={() => dispatch({ type: 'DECREMENT_R' })}>-</button>
      </div>
      <div>
        <span>g </span>
        <button onClick={() => dispatch({ type: 'INCREMENT_G' })}>+</button>
        <button onClick={() => dispatch({ type: 'DECREMENT_G' })}>-</button>
      </div>
      <div>
        <span>b </span>
        <button onClick={() => dispatch({ type: 'INCREMENT_B' })}>+</button>
        <button onClick={() => dispatch({ type: 'DECREMENT_B' })}>-</button>
      </div>
    </div>
  );
}

export default App;
