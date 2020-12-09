import React from 'react';
import useFetch from '../hooks/useFetch';

const API = 'https://jsonplaceholder.typicode.com/posts/1';

function PostDetails() {
  const { data } = useFetch(API, {});

  return (
    <div>
      <h3>{data.title}</h3>
      <p>{data.body}</p>
    </div>
  )
}

export default PostDetails;
