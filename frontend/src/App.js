import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogPostList from './components/BlogPostList';
import BlogPostDetails from './components/BlogPostDetails';
import BlogPostForm from './components/BlogPostForm';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={BlogPostList} />
          <Route path="/posts/:postId" component={BlogPostDetails} />
          <Route path="/create" component={BlogPostForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
