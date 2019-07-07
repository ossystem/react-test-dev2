import React, { Component } from 'react';
import { Row } from 'reactstrap';

import './styles/home.css';

export interface Props {

}

export default class Home extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <Row id="homePage">
        <h1>Home</h1>
      </Row>
    );
  }
}
