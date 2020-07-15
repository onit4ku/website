import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PageWrapper from "./components/PageWrapper";
import Footer from "./components/Footer";
import Home from "./components/Pages/Home";
import Portfolio from "./components/Pages/Portfolio";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";

function App() {
  return (
    <Router>
      <PageWrapper>
        <div className="App Site">
          <div className="Site-content">
            <Route path="/home" component={Home}></Route>
            <Route path="/portfolio" component={Portfolio}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/contact" component={Contact}></Route>
          </div>
          <Footer></Footer>
        </div>
      </PageWrapper>
    </Router>
  );
}

export default App;
