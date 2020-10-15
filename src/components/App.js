import React from "react";
import { Header } from "./Header";
import { About } from "./About";
import { Home } from "./Home";
import { ItemDetails } from "./ItemDetails";
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { createGlobalStyle } from "styled-components"

const App = (props) => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/items/:itemId">
            <ItemDetails />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
