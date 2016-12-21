import React, { Component } from 'react'
import Cell from './Cell'

class App extends Component {

  constructor () {
    super()
    this.state = {
      board: []
    }
  }

  componentDidMount () {
    window.fetch('http://minesweeper-api.herokuapp.com/games?difficulty=1', {method: 'POST'}).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({
        id: data.id,
        board: data.board,
        state: data.state,
        mines: data.mines
      })
    })
  }

  check (x, y) {
    console.log(`Im checking ${x} and ${y}`)
    window.fetch(`http://minesweeper-api.herokuapp.com/games/${this.state.id}/check?row=${y}&col=${x}`, {method: 'POST'}).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({
        board: data.board,
        state: data.state
      })
    })
  }

  flag (x, y) {
    console.log(`Im flagging ${x} and ${y}`)
    window.fetch(`http://minesweeper-api.herokuapp.com/games/${this.state.id}/flag?row=${y}&col=${x}`, {method: 'POST'}).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({
        board: data.board
      })
    })
  }

  render () {
    const rows = this.state.board.map((row, i) => {
      const cols = row.map((col, j) => {
        return <Cell
          value={col.toString()}
          handleCheck={() => { this.check(j, i) }}
          handleFlag={() => { this.flag(j, i) }}
          key={j} />
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
