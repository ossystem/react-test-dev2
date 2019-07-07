import React, { Component } from 'react';
import { Row } from 'reactstrap';

import './styles/news.css';

export interface Props {

}

export default class News extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <Row id="newsPage">
        <h1>News</h1>
      </Row>
    );
  }
}
