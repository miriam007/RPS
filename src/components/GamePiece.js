import React, { Component } from 'react';

class GamePiece extends Component {
    render(){
        return(
            <div>
                <img onClick={e=> this.props.onClick(e.target.name)} className='gamePiece' src={this.props.image}/>
                <p className='gamePieceText'>{this.props.text}</p>
            </div>
        )
    }
}

export default GamePiece;