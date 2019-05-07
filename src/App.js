import React, { Component } from 'react';
import './App.css';
import GamePiece from './components/GamePiece';


class App extends Component {
  constructor(){
    super();

    this.state={
      you:'',
      opponent:''
    }
  }

  // onClick
  //play your turn

  //play the computer random turn


  //check for win
  checkWin=()=>{
    if (you === opponent) {
      return 'Tie Game!'
    } else if (you === 'rock' && opponent === 'scissors' || you === 'paper' && opponent === 'rock' || you === 'scissors' && opponent === 'paper') {
      return 'You win!'
    } else {
      return 'Opponent wins. Play again?'
    }
  }

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
          onClick={this.onClick}
        />
        <GamePiece
          image='https://i.pinimg.com/originals/f7/9e/93/f79e930ae9803805a5889a3a7de0411a.png'
          text='Paper'
        />
        <GamePiece
          image='https://images-na.ssl-images-amazon.com/images/I/71baCLK2M1L._SL1500_.jpg'
          text='Scissors'
          onClick={this.onClick}
        />
      </div>
      
    </div>
   );
  }
}

export default App;
