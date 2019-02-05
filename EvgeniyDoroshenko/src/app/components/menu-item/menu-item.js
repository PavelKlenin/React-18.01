import React from "react";
import { Link } from "react-router";

class MenuItem extends React.Component {
  render() {
    return (
      <li className={this.props.active ? "nav-item-active" : "nav-item"}>
        <Link to={this.props.href} className="nav-link">
          {this.props.children}
        </Link>
      </li>
    );
  }
}

export default MenuItem;
