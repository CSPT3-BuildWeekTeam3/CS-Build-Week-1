import React, { Component } from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';

const url = '/registration/';


class Register extends Component {
  state = {
    username: '',
    password1: '',
    password2: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = e => {
    e.preventDefault();
    //`curl -X POST -H "Content-Type: application/json" -d '{"username":"testuser", "password1":"testpassword", "password2":"testpassword"}' https://lambda-mud-test.herokuapp.com/api/register/`
    const acc = { username: this.state.username, password1: this.state.password1, password2: this.state.password2 }
    console.log(acc)
    axiosWithAuth()
      .post(url, acc)
      .then((res) => {
        console.log(res.data)
        localStorage.setItem('token', res.data.key)
        this.props.history.push('/world')
      })
      .catch((err) => {
        console.log(err)
      });
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit} style={{ outline: "3px solid dodgerblue", width: "40%", margin: "auto", padding: "10px", marginTop: "50px" }}>
          <h3>Create an Account</h3>
          <FormGroup style={{ display: "flex", flexDirection: "column" }}>
            <Label>
              Username:
              <Input
                name="username"
                value={this.state.username}
                onChange={this.onChange}
              />
            </Label>

            <Label>
              Password:
              <Input
                name="password1"
                value={this.state.password1}
                onChange={this.onChange}
              />
              Re-enter Password:
              <Input
                name="password2"
                value={this.state.password2}
                onChange={this.onChange}
              />
            </Label>
            <Button color="success">Submit</Button>
          </FormGroup>
        </Form>
        <Form style={{ outline: "1px solid red", width: "40%", margin: "auto", padding: "5px", marginTop: "50px" }}>
          <FormGroup style={{ display: "flex", flexDirection: "column" }}>
            <FormText>
              Already have an account?
            </FormText>
            <Link to='/login'>
              <Button color="warning">Back to Login Page</Button>
            </Link>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default Register;