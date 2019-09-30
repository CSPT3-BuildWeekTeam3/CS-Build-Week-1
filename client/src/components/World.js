import React from 'react';
import axios from 'axios';

class World extends React.Component {
  constructor() {
    super();
    this.state = {
      startingRoom: "",
      startingDesc: "",
      currentRoom: "",
      currentDesc: "",
    }
  }

  componentDidMount() {
    this.start();
    this.move();
  }

  start = () => {
    const token = localStorage.getItem('token');
    axios({
      url: `https://cspt3-buildweek-backend.herokuapp.com/api/adv/rooms/`, //some other groups backend
      method: "GET",
      headers: {
        Authorization: token
      }
    })
      .then(res => {
        this.setState({
          startingRoom: res.data.rooms[0].title,
          userID: {/*maybe grabbing the id?*/ },
          startingDesc: res.data.rooms[0].description,
        });
      })
      .catch(err => {
        console.log('errors', err.response)
      });
  };

  move = (direction) => {
    console.log('localstorage in the move', localStorage.getItem('token'), direction)
  };

  render() {
    return (
      <div>
        <h1>
          Lambda Multi-User Dungeon (MUD)
        </h1>
        <div className='startRoom'>
          <h1>Starting Room</h1>
          <h1>Room: {this.state.startingRoom}</h1>
        </div>
        <div>
          <button type="button" className="btn north" onClick={() => this.move('n')}>North</button>
          <button type="button" className="btn south" onClick={() => this.move('s')}>South</button>
          <button type="button" className="btn east" onClick={() => this.move('e')}>East</button>
          <button type="button" className="btn west" onClick={() => this.move('w')}>West</button>
        </div>
      </div>
    )

  }
};

export default World; 