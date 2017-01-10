import React, { Component } from 'react'
import GameBoard from './GameBoard'
import Lose from './Lose'
import Start from './Start'
import Win from './Win'
import Footer from './Footer'

class App extends Component {

  constructor () {
    super()
    this.state = {
      board: [],
      state: 'start'
    }
  }

  createGame (i) {
    window.fetch(`http://minesweeper-api.herokuapp.com/games?difficulty=${i}`, {method: 'POST'}).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({
        id: data.id,
        board: data.board,
        state: data.state,
        mines: data.mines,
        wonMessage: false,
        lostMessage: false
      })
    })
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.state === 'playing' && this.state.state === 'lost') {
      setTimeout((e) => { this.setState({lostMessage: true}) }, 3000)
    } else if (prevState.state === 'playing' && this.state.state === 'won') {
      setTimeout((e) => { this.setState({wonMessage: true}) }, 3000)
    }
  }

  check (x, y) {
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
    window.fetch(`http://minesweeper-api.herokuapp.com/games/${this.state.id}/flag?row=${y}&col=${x}`, {method: 'POST'}).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({
        board: data.board
      })
    })
  }

  reset () {
    console.log('clicking')
    this.setState({
      state: 'start'
    })
  }

  render () {
    let view
    if (this.state.state === 'start') {
      view = <Start createGame={(i) => this.createGame(i)} />
    } else if (this.state.lostMessage) {
      view = <Lose reset={() => this.reset()} />
    } else if (this.state.wonMessage) {
      view = <Win reset={() => this.reset()} />
    } else {
      view = <GameBoard board={this.state.board} check={(x, y) => this.check(x, y)} flag={(x, y) => this.flag(x, y)} />
    }

    return <div className='app'>
      <section id='chris'>
        <header className='header'>
          <h1>Minesweeper</h1>
        </header>
      </section>
      {view}
      <section id='see'>
        <ul id='floor'>
          <li id='a'>1</li>
          <li id='b'>2</li>
          <li id='c'>3</li>
          <li id='d'>4</li>
        </ul>
        <Footer />
      </section>
    </div>
  }
}

export default App
