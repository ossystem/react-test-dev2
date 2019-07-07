import React, { Component } from 'react';
import { 
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from  'reactstrap';
import { USER } from '../../types';

import './styles/login.css';

export interface Props {
  user: USER.UserState,
  signIn: (login: string, password: string) => any
}

export interface State {
  login: string,
  password: string,
}

export default class Login extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      login: '',
      password: '',
    }
    this.signIn = this.signIn.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  signIn():void {
    const { login, password } = this.state;
    const { signIn } = this.props;
    if (login && password) {
      signIn(login, password);
    }
  }

  onChange(name: string, event: React.ChangeEvent<HTMLInputElement>):void {
    const val = event.currentTarget.value;
    this.setState({ [name]: val } as Pick<State, keyof State>);
  }

  render() {
    console.log(this.props);
    return (
      <Row id="loginPage">
        <h1>Login</h1>
        <Form inline>
          <FormGroup 
            className="mb-2 mr-sm-2 mb-sm-0"
          >
            <Label 
              for="exampleEmail" 
              className="mr-sm-2"
            >
              Login
            </Label>
            <Input 
              type="text" 
              name="email" 
              id="exampleEmail" 
              placeholder="Admin"
              onChange={this.onChange.bind(this, 'login')}
            />
          </FormGroup>
          <FormGroup 
            className="mb-2 mr-sm-2 mb-sm-0"
          >
            <Label 
              for="examplePassword" 
              className="mr-sm-2"
            >
              Password
            </Label>
            <Input 
              type="password"
              name="password"
              id="examplePassword"
              placeholder="don't tell!"
              onChange={this.onChange.bind(this, 'password')}
            />
          </FormGroup>
          <Button
            onClick={this.signIn}
          >
            Submit
          </Button>
        </Form>
      </Row>
    );
  }
}
