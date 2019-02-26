import React, { Component } from "react";
import Navbar from "./components/navbar.jsx";
import Header from "./components/header.jsx";
import Slider from "./components/slider.jsx";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Navbar />
        <main className="container">
          <Slider />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
