// src/components/Posts.js
import React, { useState, useEffect } from 'react';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data when component mounts
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data.slice(0, 10)); // just show first 10 posts
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Latest Posts</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        posts.map(post => (
          <div key={post.id} style={{ marginBottom: '20px' }}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default Posts;
