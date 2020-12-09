import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';

const API = 'https://jsonplaceholder.typicode.com/posts';

function PostList() {
  const { data } = useFetch(API, []);

  const renderPostList = () => data.map(postElement => <div key={postElement.id}>{postElement.title}</div>);

  return (
    <div>
      <h2>Posty:</h2>
      {renderPostList()}
    </div>
  )
}

export default PostList;