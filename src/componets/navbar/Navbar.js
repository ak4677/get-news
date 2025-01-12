import React, { Component } from 'react'
import './Navbar.css'
import {
  Link
} from "react-router-dom";
export class Navbar extends Component {
  display = () => {
    let x = document.getElementById("list")
    if (x.style.display === "inline-block") {
      console.log("hello")
      x.style.display = "none"
    }
    else {
      console.log("must")
      x.style.display = "inline-block"
    }
  }
  render() {
    let { mode, togglemode } = this.props;
    return (
      <div className='navbar'>
        <nav className={`nav nav-${mode}`}>
          <div id="leftnav" className={`left-nav`}>
            <div className='home'><Link to="/get-news">GET-NEWS</Link></div>
            <div id="list" className={`left-nav list`}>
              <li ><Link to="/general">General</Link></li>
              <li ><Link to="/sports">Sports</Link></li>
              <li ><Link to="/entertainment">Entertainment</Link></li>
              <li ><Link to="/health">Health</Link></li>
              <li ><Link to="/science">Science</Link></li>
              <li ><Link to="/business">Business</Link></li>
              <li ><Link to="/technology">Technology</Link></li>
            </div>
          </div>
          <div className='right-nav' >
            {/* <div>language</div> */}
            <label className="switch">
              <input type="checkbox" onClick={togglemode} />
              <span className="slider round" ></span>
            </label>
            {/* <input type='text' /> */}
            <div className="bar" onClick={() => { this.display() }}>&#9776;</div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar

