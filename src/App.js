import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GamePiece from './components/GamePiece';


class App extends Component {
  render() {
  return (
    <div className="App">
      <div>
        <h1>Rock, Paper, Scissors</h1>
      </div>
      {/* this is the div with the main headings */}
      <div>
        <p>You</p>
        <p>Opponent</p>
      </div>
      {/* this is the div with the game play */}
      <div>
        <div className='gameSpace'></div>
        <div>
          <p>v.s</p>
        </div>
        <div className='gameSpace'></div>
      </div>
      {/* this is the div where the player chooses their piece */}
      
      <div>
        <p>Choose Your Weapon</p>
        </div>
        <div>
        <GamePiece 
          image='http://outdoordesignbylucas.files.wordpress.com/2011/01/1-10-11-charcter-rocks.jpg'
          text='Rock'
        />
        <GamePiece
          image='https://i.pinimg.com/originals/f7/9e/93/f79e930ae9803805a5889a3a7de0411a.png'
          text='Paper'
        />
        <GamePiece
          image='https://images-na.ssl-images-amazon.com/images/I/71baCLK2M1L._SL1500_.jpg'
          text='Scissors'
        />
      </div>
      
    </div>
   );
  }
}

export default App;
