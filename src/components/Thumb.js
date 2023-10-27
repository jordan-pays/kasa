import React from "react";

import "../css/Thumb.css";
import { Link } from "react-router-dom";

export default function Thumb({ item }) {
  return (
    <Link className="thumb_container" to={`fiche-logement/${item.id}`}>
      <img className="thumb_img" src={item.cover} />
      <p className="thumb_title">{item.title}</p>
    </Link>
  );
}
