import React, { Component } from 'react'

const classMap = {
  ' ': 'empty',
  '_': 'unrevealed',
  'F': 'flagged',
  '@': 'flagbomb',
  '*': 'bomb'
}

class Cell extends Component {

  static propTypes = {
    value: React.PropTypes.string.isRequired,
    handleCheck: React.PropTypes.func.isRequired,
    handleFlag: React.PropTypes.func.isRequired
  }

  icon () {
    switch (this.props.value) {
      case '*':
        return <i className='fa fa-bomb' aria-hidden='true' />
      case 'F':
        return <i className='fa fa-flag' aria-hidden='true' />
      case '@':
        return <i className='fa fa-bomb fa-flag' aria-hidden='true' />
    }
  }

  render () {
    return <td
      onClick={() => this.props.handleCheck()}
      onContextMenu={(e) => {
        e.preventDefault()
        this.props.handleFlag()
      }}
      className={classMap[this.props.value] || 'numbered'}>
      {this.props.value.match(/\d/) ? this.props.value : this.icon()}
    </td>
  }
}

export default Cell
