import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../services/api';

function BlogPostDetails() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`/posts/${postId}`)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.error(`Error fetching post ${postId}:`, error);
      });
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default BlogPostDetails;
