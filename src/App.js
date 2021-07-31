import React, { useState, useEffect } from "react";
import Home from "./Components/Home/Home";
import Pre from "./Components/Pre";

import Navbar from "./Components/Navbar";
// import About from "./components/About/About";
// import Projects from "./components/Projects/Projects";
// import Footer from "./components/Footer";
// import Resume from "./components/Resume/Resume";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "./Components/ScrollToTop";
function App() {
  const [load, updateload] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      updateload(false);
    }, 1200);
    return () => clearTimeout(timer);
  })
  return (


    <Router>
      <Pre load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>

  )
}

export default App
