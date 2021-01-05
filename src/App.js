import React from "react";
import Globalstyle from "./globalStyles";
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import { Footer, Navbar } from "./components";
import Home from "./pages/HomePage/Home";
import Section from "./Section";

function App() {
  return (
    <Router>
      <Globalstyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      {/* <Section /> */}
      <Footer />
    </Router>
  );
}

export default App;
