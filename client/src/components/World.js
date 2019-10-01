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
      url: 'https://cspt3-buildweek-backend.herokuapp.com/api/adv/init',
      method: "GET",
      headers: {
        Authorization: `Token ${token}`
      }
    })
      .then(res => {
        console.log('s', res.data)
        this.setState({
          currentRoom: res.data.title,
          id: res.data.room_id,
          name: res.data.name
        });
      })
      .catch(err => {
        console.log('errors', err.response)
      });
  };

  move = (direction) => {
    const token = localStorage.getItem('token');
    axios({
      url: "https://cspt3-buildweek-backend.herokuapp.com/api/adv/move",
      method: "POST",
      headers: {
        Authorization: `Token ${token}`
      },
      data: {
        direction: direction
      }
    })
      .then(res => {
        console.log('moving data', res.data);
        this.setState({
          currentRoom: res.data.title,
          id: res.data.room_id,
          err: res.data.error_msg
        });
      })
      .catch(err => {
        console.log(err)
      })
  };

  render() {
    return (
      <div>
        <h1>
          Lambda Multi-User Dungeon (MUD)
        </h1>
        <div className='startRoom'>
          <h1>Room: {this.state.currentRoom}</h1>
          <h1>{this.state.id}</h1>
          <h1 >{this.state.name}</h1>
          <h1 className='red'>{this.state.err}</h1>

        </div>
        <div>
          <div className='grid'>
            <div className='box'>

            </div>
            <div className='box'>

            </div>
            <div className='box'>

            </div>
            <div className='box'>

            </div>
            <div className='box'>

            </div>
          </div>
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