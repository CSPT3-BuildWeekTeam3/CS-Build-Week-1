import React, { Component } from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const url = 'https://lambda-mud-test.herokuapp.com/api/login/';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    // This will send a post request to the test server for now that will do what this curl does:
    // curl -X POST -H "Content-Type: application/json" -d '{"username":"testuser", "password":"testpassword"}' https://lambda-mud-test.herokuapp.com/api/login/
    event.preventDefault();
    const acc = { username: this.state.username, password: this.state.password }
    axios
      .post(url, acc)
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        alert('This username and/or password does not match our records');
      });
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit} style={{outline: "3px solid dodgerblue", width: "40%", margin: "auto", padding: "10px", marginTop: "50px"}}>
        <h3>Login to MUD Team 3</h3>
        <FormGroup style={{ display: "flex", flexDirection: "column" }}>
          <Label>
            Username:
            <Input
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </Label>

          <Label>
            Password:
            <Input
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Label>
          <Button color="success">Submit</Button>
        </FormGroup>
      </Form>
      <Form style={{outline: "1px solid red", width: "40%", margin: "auto", padding: "10px", marginTop: "50px"}}>
        <FormGroup style={{ display: "flex", flexDirection: "column" }}>
          <FormText>
            Don't have an account?
          </FormText>
          <Button color="warning">Create Account</Button>
        </FormGroup>
      </Form>
    </div>
    )
  }
}