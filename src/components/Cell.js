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

  render () {
    return <td onClick={() => this.props.handleCheck()}
      onContextMenu={(e) => {
        e.preventDefault()
        this.props.handleFlag()
      }}
      className={classMap[this.props.value] || 'numbered'}>
      {this.props.value.match(/\d/) ? this.props.value : null}
    </td>
  }
}

export default Cell
