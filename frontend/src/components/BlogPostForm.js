import React, { useState } from 'react';
import axios from '../services/api';

function BlogPostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/posts', { title, content })
      .then(response => {
        console.log('Post created:', response.data);
        // Reset the form fields after successful submission
        setTitle('');
        setContent('');
      })
      .catch(error => {
        console.error('Error creating post:', error);
      });
  };

  return (
    <div>
      <h1>Create New Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Content:</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

export default BlogPostForm;
