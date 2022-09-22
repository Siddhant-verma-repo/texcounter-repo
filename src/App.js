import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Texform from "./component/Texform";
import PropTypes from 'prop-types'//impt
import About from "./component/About";
import React, { useState } from "react";
import Alert from "./component/Alert";

import {
  BrowserRouter as Router,

  Route,
  
  Routes //switch is chged to router have to give route int element
} from "react-router-dom";
const App = () => {
  const [alert, setalert] = useState(null);
  const [Mode, setMode] = useState('light');

  // show alert start her if we using in same jsx use directly or in other jsx use props.showalert
  const showalert = (message, type) => {
    setalert({
      msg: message,
      ty: type,
    })
    setTimeout(() => {
      setalert(null);
    }, 3000);
  }
  // showalert function end here

  // remove color
  // const removecolor=()=>{
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-secondary')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-info')
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')

  // }
  const togglemode = () => {
    /* the below toggle is use to make bg change by butoon though we not using  */
    // const togglemode = (cls) => {
    // removecolor();
    // console.log(cls);
    // document.body.classList.add('bg-'+cls);
    /* this end here */
    if (Mode === 'light') {
      setMode('dark');
      // settext('Enable the light mode')
      document.body.style.backgroundColor = '#332244';
      showalert("Dark mode is enabled", "success")
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode is enabled", "success")


    }
  }
  return (
    //for navbar
    <>
      <Router>
        <Navbar title="Text counter" Mode={Mode} togglemode={togglemode} />
        {/* print inside so it wont go apart from block */}
        <Alert alert={alert} />
        <div className="container">

          <Routes>
            <Route exact path="/about" element={<About />} >
            </Route>
            <Route exact path="/"
              element=
              {<Texform heading="Enter text to analyze" title="Write Text" Mode={Mode} showalert={showalert} />}
            >
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
};

// Navbar.propTypes={//like this we can use this 
//   title:propTypes.string}
export default App;