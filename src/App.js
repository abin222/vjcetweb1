import React, { Component } from "react";
import Navbar from "./components/navbar.jsx";
import Header from "./components/header.jsx";
import Slider from "./components/slider.jsx";
import News from "./components/cards.jsx";

import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main className="container">
          <Navbar />
          <Slider />
          <News />

        </main>
      </React.Fragment>
    );
  }
}

export default App;
