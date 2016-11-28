import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import App from './components/App';
import TodoCard from './components/TodoCard';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={App}/>
    <Route path="siva" component={TodoCard}/>
  </Route>
);

export default routes;
