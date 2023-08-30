import './App.css';
import { Context } from './components/Context';
import Books from './components/Books';

function App() {
  return (
    <Context>
      <Books />
    </Context>
  );
}

export default App;
