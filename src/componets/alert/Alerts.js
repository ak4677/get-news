import React, { Component } from 'react'
import './Alerts.css'
export class Alerts extends Component {
  render() {
    return (
      <div>
        <div className={`alert alert-${this.props.info}`} role='alert'>
          <span>
            <strong >Warning: </strong>
            <span>For fetching news you should have use you own API key, after that the result will be shown as below. The given news is not real time news</span>
          </span>
          <span className='cross' >&times;</span>
        </div>
      </div>
    )
  }
}

export default Alerts

