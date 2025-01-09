import React, { Component } from 'react'
import loading from './loading.gif'
import './Sppiner.css'
export default class Sppiner extends Component {
  render() {
    return (
      <div className="loadingimg" >
        <img src={loading} alt='loading'></img>
      </div>
    )
  }
}
