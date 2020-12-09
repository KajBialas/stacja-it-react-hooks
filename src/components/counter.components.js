import React from 'react';
import useCounter from '../hooks/useCounter';
const COUNTER_INITIAL_STATE = 0;

function Counter() {
  const { counterValue, handleIncrement, handleDecrement, handleReset } = useCounter(COUNTER_INITIAL_STATE);

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