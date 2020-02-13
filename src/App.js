import React, { Component } from "react";
import NavBar from "./components/Navigation/NavBar";
import Routes from "./components/Navigation/Routes";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <br />
        <hr />

        <br />
        <Routes />
      </div>
    );
  }
}
