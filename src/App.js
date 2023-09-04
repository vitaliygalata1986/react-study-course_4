import Timer from './components/Timer';
import { useState } from 'react';
import './App.css';

function App() {
  const [isVisible, setVisible] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setVisible(!isVisible)}>Toggle timer</button>
      {isVisible && <Timer />}
    </div>
  );
}

export default App;
