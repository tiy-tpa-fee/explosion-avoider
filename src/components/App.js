import React, { Component } from 'react'
import Cell from './Cell'

class App extends Component {

  render () {
    return <div className='app'>
      <h1>Explosion Avoider!</h1>

      <div className='gameboard'>
        <table>
          <tbody>
            <tr>
              <Cell value='_' />
              <Cell value='2' />
              <Cell value='F' />
            </tr>
            <tr>
              <Cell value='*' />
              <Cell value='_' />
              <Cell value='@' />
            </tr>
            <tr>
              <Cell value=' ' />
              <Cell value=' ' />
              <Cell value=' ' />
            </tr>
          </tbody>
        </table>
      </div>
      <footer>Potatoes made with love at the Iron Yard.</footer>
    </div>
  }
}

export default App
