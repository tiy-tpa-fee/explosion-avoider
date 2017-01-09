import React, { Component } from 'react'

class Start extends Component {

  static propTypes = {
    createGame: React.PropTypes.func.isRequired
  }

  render () {
    return (
      <div className='start'>
        <h1>Ready?</h1>
        <p>Choose your level of difficulty.</p>
        <button onClick={() => this.props.createGame(0)}>
          Easy
        </button>
        <button onClick={() => this.props.createGame(1)}>
          Normal
        </button>
        <button onClick={() => this.props.createGame(2)}>
          Difficult
        </button>
      </div>
    )
  }
}

export default Start
