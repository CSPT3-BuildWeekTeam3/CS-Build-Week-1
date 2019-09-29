import React from 'react';
import NavBar from './components/NavBar';
import Login from './components/Login';
import ChatBox from './components/ChatBox';
import Dungeon from './components/Dungeon';
import RoomInfo from './components/RoomInfo';
import Commands from './components/Commands';
import { CssBaseline, Container } from '@material-ui/core';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      currentRoom: {}
    };

    this.content = {
      headers: {
        Authorization: 'Token 6b7b9d0f33bd76e75b0a52433f268d3037e42e66'
      }
    };
  }

  componentDidMount() {
    axios
      .get('https://cspt3-buildweek-backend.herokuapp.com/api/adv/init', this.content)
      .then(data => {
        this.setState({currentRoom: data.data})

      })
      .catch(err => {
        console.log(err);
      });
  }

  tempChangeLogin = () => {
    this.setState(prev => {
      return { loggedIn: !prev.loggedIn };
    });
  };

  render() {
    return (
      <div>
        <CssBaseline />
        <NavBar tempChangeLogin={this.tempChangeLogin} />
        {!this.state.loggedIn ? (
          <Login />
        ) : (
          <Container>
            <Dungeon />
            <ChatBox />
            <Commands />
            <RoomInfo currentRoom={this.state.currentRoom} />
          </Container>
        )}
      </div>
    );
  }
}

export default App;