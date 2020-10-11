import React from "react";
import "./App.css";
import Nav from "./BILL/Nav";
import Edit from "./BILL/Edit";
import Bill from "./BILL/Bill";
import Home from "./BILL/Home";
import BillDetail from "./BILL/BillDetail";
import Add from "./BILL/Add";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/bill" component={Bill} />
          <Route path="/bill_detail" component={BillDetail} />
          <Route path="/edit" component={Edit} />
          <Route path="/add" component={Add} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
