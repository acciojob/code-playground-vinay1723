import React from "react";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <div>
      <p></p>
      <ul>
        <li>
          <Link to="/playground">PlayGround</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
