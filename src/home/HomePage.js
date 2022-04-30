import React from "react";
import { useHistory, Route, Link, Switch } from "react-router-dom";
import Form from "../form/Form";
export default function HomePage() {
  const history = useHistory();

  const routeToPizza = () => {
    history.push("/pizza");
  };

  return (
    <div className="home-wrapper">
      <div className="middle">
        {/* <div>
          <img
            className="home-image"
            src="https://www.allstarpizzaaltoona.net/_upload/slideshow/14938254672566569802.jpg"
          />
        </div> */}
        <div className="btn">
          <button onClick={routeToPizza} className="pizza-button">
            Pizza?
          </button>
        </div>
      </div>
    </div>
  );
}
