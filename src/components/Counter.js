import React, { useState } from 'react';

function Counter() {
  // State to keep track of the count
  const [count, setCount] = useState(1);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(count > 0 ? count - 1 : 0); // Ensure count doesn't go below 0
  };

  return (
    <div className="counter-container">
      <button 
        onClick={decrement} 
        className="counter-button"
        disabled={count === 0} // Disable button when count is 0
      >
        -
      </button>
      <span className="counter-display">{count}</span>
      <button 
        onClick={increment} 
        className="counter-button"
      >
        +
      </button>
    </div>
  );
}

export default Counter;
