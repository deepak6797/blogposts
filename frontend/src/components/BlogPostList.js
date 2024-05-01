import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../services/api';

function BlogPostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div>
      <h1>Blog Post List</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogPostList;
