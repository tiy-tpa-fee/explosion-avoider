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
    value: React.PropTypes.string.isRequired
  }

  render () {
    return <td className={classMap[this.props.value] || 'numbered'}>
      {this.props.value.match(/\d/) ? this.props.value : null}
    </td>
  }
}

export default Cell
