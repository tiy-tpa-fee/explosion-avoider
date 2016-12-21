import React, { Component } from 'react'
import Cell from './Cell'

class App extends Component {

  constructor () {
    super()
    this.state = {
      board: [
        ['_', '2', 'F', '1'],
        ['*', '_', '@', '*'],
        [' ', ' ', ' ', 'F'],
        ['_', '*', '@', '3']
      ]
    }
  }
  render () {
    const rows = this.state.board.map((row, i) => {
      const cols = row.map((col, j) => {
        return <Cell value={col} key={j} />
      })
      return <tr key={i}>
        {cols}
      </tr>
    })
    return <div className='app'>
      <h1>Explosion Avoider!</h1>

      <div className='gameboard'>
        <table>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
      <footer>Potatoes made with love at the Iron Yard.</footer>
    </div>
  }
}

export default App
