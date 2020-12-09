import { useState, useEffect } from 'react';

function useFetch(apiEndpoint, initData) {
  const [ data, setData ] = useState(initData);

  useEffect(() => {
    fetch(apiEndpoint)
      .then(response => response.json())
      .then(response => setData(response));
  }, []);

  return {
    data,
  }
}

export default useFetch;

