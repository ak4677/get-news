import React, { Component } from 'react'
import './Navbar.css'
import {
  Link
} from "react-router-dom";
export class Navbar extends Component {
  render() {
    let {mode,togglemode}=this.props;
    return (
      <div>
          <nav className={`nav nav-${mode}`}>
              <div className={`left-nav`}>
                  <li><Link to="/">General</Link></li>
                  <li><Link to="/sports">Sports</Link></li>
                  <li><Link to="/entertainment">Entertainment</Link></li>
                  <li><Link to="/health">Health</Link></li>
                  <li><Link to="/science">Science</Link></li>
                  <li><Link to="/business">Business</Link></li>
                  <li><Link to="/technology">Technology</Link></li>
              </div>
              <div className='right-nav' >
                <div>language</div>
                  <label className="switch">
                      <input type="checkbox" onClick={togglemode}/>
                      <span className="slider round" ></span>
                  </label>
                  <input type='text'/>
              </div>
          </nav>
      </div>
    )
  }
}

export default Navbar

