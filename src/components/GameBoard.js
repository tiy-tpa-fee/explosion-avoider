import React, { Component } from 'react'
import Cell from './Cell'

class GameBoard extends Component {

  static propTypes = {
    board: React.PropTypes.array.isRequired,
    check: React.PropTypes.func.isRequired,
    flag: React.PropTypes.func.isRequired
  }

  render () {
    const rows = this.props.board.map((row, i) => {
      const cols = row.map((col, j) => {
        return <Cell
          value={col.toString()}
          handleCheck={() => { this.props.check(j, i) }}
          handleFlag={() => { this.props.flag(j, i) }}
          key={j}
        />
      })
      return <tr key={i}>
        {cols}
      </tr>
    })

    return <div className='gameboard'>
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  }
}

export default GameBoard
