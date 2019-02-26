import React, { Component } from "react";
class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link active" href="#">
              About Us
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Contactus
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Login
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
