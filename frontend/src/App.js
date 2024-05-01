// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogPostList from './components/BlogPostList';
import BlogPostDetails from './components/BlogPostDetails';
import BlogPostForm from './components/BlogPostForm';

const App = () => {
  return (
    <Router>
      <div>
        <h1>My Blog</h1>
        <Switch>
          {/* Routes for managing blog posts */}
          <Route path="/posts/:postId" component={BlogPostDetails} />
          <Route path="/create" component={BlogPostForm} />
          <Route path="/postlist" exact component={BlogPostList} />
          <Route path="/postlist/:postId" component={BlogPostDetails} />
          <Route path="/postcreate" component={BlogPostForm} />
          {/* Default route for main blog page */}
          <Route path="/" exact render={() => (
            <div>
              <BlogPostList />
              <hr />
              <h2>Create New Post</h2>
              <BlogPostForm />
              <hr />
              <h2>Post Details</h2>
              <BlogPostDetails postId={1} /> {/* Pass the actual post ID */}
            </div>
          )} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
