import React, { Component } from 'react'
import './Alerts.css'
export class Alerts extends Component {
  render() {
    return (
      <div>
        <div className='alert alert-success' role='alert'>
          <span>
            <strong >Success: </strong>
            <span>done!</span>
          </span>
          <span className='cross' >&times;</span>
        </div>
      </div>
    )
  }
}

export default Alerts

