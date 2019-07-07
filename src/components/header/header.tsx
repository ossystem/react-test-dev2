import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { forIn } from 'lodash';

import { HEADER } from '../constants';

import './styles/header.css';

export interface Props {

}

interface State {
  collapsed: boolean
}

export default class Header extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      collapsed: true
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.renderLinks = this.renderLinks.bind(this);
  }

  toggleNavbar(): void {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  renderLinks (): JSX.Element {
    const items: any = [];
    forIn(HEADER.header, (value: HEADER.Link, key: string) => {
      items.push(
        <NavItem key={value.name} >
          <Link to={value.path}>
            <NavLink href="">
              {value.name.toUpperCase()}
            </NavLink>
          </Link>
        </NavItem>
      );
    });
    return items;
  }

  render() {
    return (
        <Navbar 
          color="faded" 
          expand="md"
          light
        >
          <NavbarBrand 
            href="/" 
            className="mr-auto"
          >
            Reactstrap
          </NavbarBrand>
          <NavbarToggler 
            onClick={this.toggleNavbar} 
            className="mr-2"
          />
          <Collapse 
            isOpen={!this.state.collapsed} 
            navbar
          >
            <Nav navbar>
              {this.renderLinks()}
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}
