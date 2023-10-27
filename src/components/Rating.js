import React, { useState } from "react";

import "../css/Rating.css";
import { useEffect } from "react";

export default function Rating({ nbStars }) {
  const [ratings, setRatings] = useState([]);

  function createRating() {
    const ratingsConstruct = [];
    for (let index = 1; index <= 5; index++) {
      ratingsConstruct.push(
        <div
          className={`stars_item ${nbStars >= index ? "stars_item_actif" : ""}`}
          key={index}
        >
          <i className="fa-solid fa-star"></i>
        </div>
      );
    }
    setRatings(ratingsConstruct);
  }

  useEffect(() => {
    if (nbStars) {
      createRating();
    }
  }, [nbStars]);

  return <div className="stars_container">{ratings?.map((item) => item)}</div>;
}
