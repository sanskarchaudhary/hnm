import React from "react";
import "../component/style.css"; // Import the CSS file for styling
import "./pages/digester.js";
import "./pages/education.js"
import "./pages/food.js"
//import { useHistory } from "react-router-dom";

export default function Stats() {

  const handleClick = (image) => {
    if (image === 1) {
      window.location.href = "/projects/food";
    } else if (image === 2) {
      window.location.href = "/projects/education";
    } else if (image === 3){
      window.location.href = "/projects/digester";
    }
  };

  return (
    <div className="container2">
      <div className="grid2">
        {/* food donation */}
        <img
          src={require("../img/education/WhatsApp Image 2024-05-12 at 21.33.56.jpeg")}
          onClick={() => handleClick(1)}
        />
        {/* education */}
        <img
          src={require("../img/images/food/WhatsApp Image 2024-05-12 at 21.34.12.jpeg")}
          onClick={() => handleClick(2)}
        />
        {/* digaster management */}
        <img
          src={require("../img/digester/WhatsApp Image 2024-05-12 at 18.25.00.jpeg")}
          onClick={() => handleClick(3)}
        />
      </div>
    </div>
  );
}
