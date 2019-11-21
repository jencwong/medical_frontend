import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="Nav">
          <ul style={{ listStyle: "none" }}>
            <li>
              <a href="#">Register</a>
            </li>
            <li>
              <a href="#">Log In</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
