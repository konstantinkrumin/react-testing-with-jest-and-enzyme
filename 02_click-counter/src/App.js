import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);

  const increment = () => {
    setCount(count + 1);
    setError(false);
  };

  const decrement = () => {
    count > 0 ? setCount(count - 1) : setError(true);
  };

  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">
        The counter is currently&nbsp;
        <span data-test="count">{count}</span>
      </h1>

      <div data-test="error-message" className={`error ${error ? '' : 'hidden'}`}>
        The counter cannot go below 0
      </div>

      {/* {isShowError && (
        <p data-test="error-message" style={{ color: 'red' }}>
          The counter cannot go below zero.
        </p>
      )} */}

      <button data-test="increment-button" onClick={() => increment()}>
        Increment counter
      </button>
      <button data-test="decrement-button" onClick={() => decrement()}>
        Decrement counter
      </button>
    </div>
  );
}

export default App;
