import React from "react";
import { useHistory, Route, Link, Switch } from "react-router-dom";
import Form from "../form/Form";
import "../home/HomePage.css";
export default function HomePage() {
  const history = useHistory();

  const routeToPizza = () => {
    history.push("/pizza");
  };

  return (
    <div className="home-wrapper">
      <nav>
        <h1 className="home-header">Welcome to Andrade's Pizza</h1>
        <div className="nav-links" id="links">
          <Link to="/">Home</Link>
          <Link to="/pizza" id="order-pizza">
            Order Pizza
          </Link>
        </div>
      </nav>
      <img
        className="home-image"
        src="https://www.allstarpizzaaltoona.net/_upload/slideshow/14938254672566569802.jpg"
      />

      <button onClick={routeToPizza} className="pizza-button">
        Pizza?
      </button>
    </div>
  );
}
