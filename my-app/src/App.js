// App.js
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp";
import AddTodo from "./AddTodo";
import SingleTodo from "./SingleTodo";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/addtodo" component={AddTodo} />
          <Route path="/singletodo/:id" component={SingleTodo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
