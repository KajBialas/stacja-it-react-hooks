import React, { useEffect, useState } from 'react';

const API = 'https://jsonplaceholder.typicode.com/posts';

function PostList() {
  const [ postList, setPostList ] = useState([]);

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(response => setPostList(response));
  }, []);

  const renderPostList = () => postList.map(postElement => <div key={postElement.id}>{postElement.title}</div>);

  return (
    <div>
      <h2>Posty:</h2>
      {renderPostList()}
    </div>
  )
}

export default PostList;