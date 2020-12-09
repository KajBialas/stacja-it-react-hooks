import { useState, useEffect } from 'react';

function useFetch(apiEndpoint, initData) {
  const [ data, setData ] = useState(initData);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(apiEndpoint)
      .then(response => response.json())
      .then(response => {
        setLoading(false);
        setData(response);
      });
  }, []);

  return {
    data,
    loading,
  }
}

export default useFetch;

