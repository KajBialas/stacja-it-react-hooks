import React, { useState } from 'react';

const COUNTER_INITIAL_STATE = 0;

function Counter() {
  const [counterValue, setCounterValue] = useState(COUNTER_INITIAL_STATE);

  // const handleIncrement = () => setCounterValue(counterValue + 1);
  const handleIncrement = () => setCounterValue(prevState => prevState + 1);
  // const handleDecrement = () => setCounterValue(counterValue - 1);
  const handleDecrement = () => setCounterValue(prevState => prevState - 1);
  const handleReset = () => setCounterValue(COUNTER_INITIAL_STATE);

  return (
    <div>
      Counter: {counterValue}
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>RESET</button>
    </div>
  )
}

export default Counter;