import React, { Component } from 'react'

import styles from '../styles/screen.scss'

class Footer extends Component {

  render () {
    return (
      <div className='footer'>
        <footer>
          <h2>Stay connected with me.</h2>
          <div className='socials'>
            <ul>
              <li><a href='' target='_blank'><i className='fa fa-twitter' aria-hidden='true' /></a></li>
              <li><a href='' target='_blank'><i className='fa fa-facebook' aria-hidden='true' /></a></li>
              <li><a href='' target='_blank'><i className='fa fa-instagram' aria-hidden='true' /></a></li>
              <li><a href='' target='_blank'><i className='fa fa-linkedin' aria-hidden='true' /></a></li>
              <li><a href='' target='_blank'><i className='fa fa-github' aria-hidden='true' /></a></li>
            </ul>
          </div>
          <h5>Copyright &copy; 2017 Christopher Andrew Kramer. Built with <i className='fa fa-heart' aria-hidden='true' /> at The Iron Yard</h5>
        </footer>
      </div>
    )
  }
}

export default Footer
