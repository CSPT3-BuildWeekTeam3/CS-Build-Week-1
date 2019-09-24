import React, { Component } from "react";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";


const url = '/login/';

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
    axiosWithAuth()
      .post(url, acc)
      .then((res) => {
        localStorage.setItem('token', res.data.key)
        this.props.history.push('/')
      })
      .catch((err) => {
        alert('This username and/or password does not match our records');
      });
  }

  render() {
    return (
      <div>
        Login to MUD Team 3
          <form onSubmit={this.handleSubmit} >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>
              Username:
              <input
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </label>

            <label>
              Password:
              <input
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}