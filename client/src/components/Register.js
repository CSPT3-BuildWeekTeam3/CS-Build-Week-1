import React, { Component } from 'react';
import axios from 'axios';

const url = 'https://lambda-mud-test.herokuapp.com/api/registration/';

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
    axios
      .post(url, acc)
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>
              Username:
              <input
                name="username"
                value={this.state.username}
                onChange={this.onChange}
              />
            </label>

            <label>
              Password:
              <input
                name="password1"
                value={this.state.password1}
                onChange={this.onChange}
              />
              Re-enter Password:
              <input
                name="password2"
                value={this.state.password2}
                onChange={this.onChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default Register;