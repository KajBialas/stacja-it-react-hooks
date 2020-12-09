import { useState } from 'react';

function useCounter(counterInitialValue) {
  const [counterValue, setCounterValue] = useState(counterInitialValue);

  const handleIncrement = () => setCounterValue(prevState => prevState + 1);
  const handleDecrement = () => setCounterValue(prevState => prevState - 1);
  const handleReset = () => setCounterValue(counterInitialValue);

  return {
    counterValue,
    handleIncrement,
    handleDecrement,
    handleReset,
  }
}

export default useCounter;