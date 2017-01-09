import React, { Component } from 'react'

class Lose extends Component {

  static propTypes = {
    reset: React.PropTypes.func.isRequired
  }

  render () {
    return <div className='lose'>
      {/* <div> */}
      <i className='fa fa-bomb fa-fw' aria-hidden='true' />
      {/* </div> */}
      <h1>LOSER</h1>
      <button onClick={() => this.props.reset()}>
        Play Again?
      </button>
    </div>
  }
}
// http://fontawesome.io/examples/

export default Lose
