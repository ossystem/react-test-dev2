import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './components/home';
import News from './components/news';
import Login from './components/login';

import Header from './components/header';

export interface Props {

}

export default class Root extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className='routerContainer'>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}
