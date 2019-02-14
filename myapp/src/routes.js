import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './components/home/Homepage';
import About from './components/about/AboutPage.js';
import App from './components/App';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
    </Route>
);
