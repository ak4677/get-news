import Navbar from './componets/navbar/Navbar'
import React, {Component} from 'react'
// import Alerts from './componets/Alerts'
import Newscnt from './componets/newscnt/Newscnt'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
export default class App extends Component {
  constructor(){
    super();
    this.state={
      mode: "light"
    }
  }

  togglemodefun=()=>{
    if(this.state.mode==="light"){
      this.setState({
        mode: "dark"
      })
      document.body.style.backgroundColor='rgb(55, 52, 52)'
    }
    else{
      this.setState({
        mode: "light"
      })
      document.body.style.backgroundColor="white"
    }
  }
  render() {
    const apiKey=process.env.REACT_APP_API_KEY
    // const [alert,setalert]=useState(null);

    // const showalerts=(type, message)=>{
    //   setalert({
    //     msg:message,
    //     typ: type
    //   })
    //   setTimeout(() => {
    //     setalert(null)
    //   }, 3000);
    // }
    // const rmalt=()=>
    //   setalert(null)
    // }
    return (
      <div>
        <Router>
          <Navbar mode={this.state.mode} togglemode={this.togglemodefun}/>
          {/* <Alerts/> */}
          <Routes>
            <Route exact path="/" element={<Newscnt key="general" mode={this.state.mode} country="us" category="general" />}/>
            <Route exact path="/general" element={<Newscnt key="general" mode={this.state.mode} country="us" category="general" />}/>
            <Route exact path='/sports' element={<Newscnt  key="sports" mode={this.state.mode} country="us" category="sports" />}/>
            <Route exact path='/entertainment' element={<Newscnt key="entertainment" mode={this.state.mode} country="us" category="entertainment" />}/>
            <Route exact path='/health' element={<Newscnt key="health" mode={this.state.mode} country="us" category="health" />}/>
            <Route exact path='/science' element={<Newscnt key="science" mode={this.state.mode} country="us" category="science" />}/>
            <Route exact path='/business' element={<Newscnt key="business" mode={this.state.mode} country="us" category="business" />}/>
            <Route exact path='/technology' element={<Newscnt key="technology" mode={this.state.mode} country="us" category="technology" />}/>
          </Routes>
        </Router>
      </div>
    )
  }
}
