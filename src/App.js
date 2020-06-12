import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import SingUp from "./pages/SignUp";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SingUp} />
        <Route path="/products" component={Products} />
      </Switch>
    </div>
  );
}

export default App;
