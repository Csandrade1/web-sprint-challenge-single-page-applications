import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <h1>Welcome to Andrade's Pizza</h1>

      <div>
        <Link className="headerlink" to="/">
          Home
        </Link>
        <Link className="headerlink" to="/pizza" id="order-pizza">
          Order Pizza
        </Link>
      </div>
    </div>
  );
}
