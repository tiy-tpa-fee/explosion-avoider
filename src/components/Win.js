import React, { Component } from 'react'

class Win extends Component {

  static propTypes = {
    reset: React.PropTypes.func.isRequired
  }

  render () {
    return <div className='win'>
      <div>
        <i className='fa fa-flag fa-flip-horizontal fa-fw' aria-hidden='true' />
        <i className='fa fa-flag fa-fw' aria-hidden='true' />
      </div>
      <h1>
        YOU WIN!!!
      </h1>
      <button id='playAgain' onClick={() => this.props.reset()}>
        Play Again?
      </button>
    </div>
  }
}
export default Win
