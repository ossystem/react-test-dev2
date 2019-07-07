import React, { Component } from 'react';
import { Row } from  'reactstrap';

import './styles/login.css';

export interface Props {

}

export default class Login extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <Row id="loginPage">
        <h1>Login</h1>
      </Row>
    );
  }
}
