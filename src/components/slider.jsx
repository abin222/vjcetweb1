import React, { Component } from "react";
import bg1 from "./assets/bg.jpg";
import bg2 from "./assets/bg2.jpg";
import bg3 from "./assets/bg3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
class Slider extends Component {
  state = {

  };
  this.Carousel.showThumbs=false;
  render() {
    return (
      <Carousel>
        <div>
          <img src={bg1} />
        </div>
        <div>
          <img src={bg2} />
        </div>
        <div>
          <img src={bg3} />
        </div>
      </Carousel>
    );
  }
}

export default Slider;
