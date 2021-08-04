import React, { useState, useEffect } from "react";
import Home from "./Components/Home/Home";
import Pre from "./Components/Pre";

import Navbar from "./Components/Navbar";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer";
import Resume from "./Components/Resume/Resume";
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
          <Route path="/about" exact component={About} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/resume" exact component={Resume} />
        </Switch>
        <Footer />
      </div>
    </Router>

  )
}

export default App
