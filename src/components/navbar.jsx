/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="Navbar">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link disabled" href="#">
              <p class="font-weight-bold">Admission</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">
              <p class="font-weight-bold">Departments</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">
              <p class="font-weight-bold">Campus Life</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">
              <p class="font-weight-bold">Facilities</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">
              <p class="font-weight-bold">Academics</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">
              <p class="font-weight-bold">Placement</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">
              <p class="font-weight-bold">R&D</p>
            </a>
          </li>
        </ul>{" "}
      </div>
    );
  }
}

export default Navbar;
