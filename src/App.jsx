import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "./index.css";
import {BrowserRouter as Router} from "react-router-dom";
import {Switch} from "react-router";
import Content from "./Home/Content";
import {Route} from "react-router";
import NotFound from "./Components/404/Notfound";
import Search from "./Search/Search";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Content} />
        <Route exact path="/search" component={Search} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
