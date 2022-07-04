import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components";
import Resume from "./components/Skills/Skills";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

import "./App.css";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/skill" component={Resume} />
        <Route exact path="/projects" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </>
  );
}

export default App;
