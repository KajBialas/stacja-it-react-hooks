import { useReducer } from 'react';

const COUNTER_ACTIONS_TYPE = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
};

const generateInitialState = (initValue) => ({
  counterValue: initValue,
});

function counterReducer(state, action) {
  switch (action.type) {
    case (COUNTER_ACTIONS_TYPE.INCREMENT):
      return {
        counterValue: state.counterValue + 1,
      }
    case (COUNTER_ACTIONS_TYPE.DECREMENT):
      return {
        counterValue: state.counterValue - 1,
      }
    case (COUNTER_ACTIONS_TYPE.RESET):
      return {
        counterValue: 0,
      }
  }
}

function useCounter(counterInitialValue) {
  const [state, dispatch] = useReducer(counterReducer, generateInitialState(counterInitialValue));

  const handleIncrement = () => dispatch({type: COUNTER_ACTIONS_TYPE.INCREMENT});
  const handleDecrement = () => dispatch({type: COUNTER_ACTIONS_TYPE.DECREMENT});
  const handleReset = () => dispatch({type: COUNTER_ACTIONS_TYPE.RESET});

  return {
    counterValue: state.counterValue,
    handleIncrement,
    handleDecrement,
    handleReset,
  }
}

export default useCounter;