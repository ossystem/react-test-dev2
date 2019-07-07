import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Home from './home';
import News from './news';
import Login from '../containers/login';

import { USER } from '../types';

import Header from './header';

export interface Props {
  user: USER.UserState
}

export default class Root extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  checkAuth(Component: typeof React.Component, path: string): JSX.Element {
    const { user: { loggedIn }} = this.props;
    let el = <Redirect to={path}/>;
    if (loggedIn) {
      el = <Component/>;
    }
    return el;
  }
  render() {
    const { user: { loggedIn }} = this.props;
    return (
      <Router>
        <div className='routerContainer'>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/news" 
            render={this.checkAuth.bind(this, News, '/login')}
          />
          <Route path="/login"  component={Login} />
        </div>
      </Router>
    );
  }
}
