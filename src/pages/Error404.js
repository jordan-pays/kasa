import React from "react";
import "../css/Error.css";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="container">
      <div className="container_error">
        <div>
          <p className="huge_text">404</p>
          <p className="text">Oups! La page que vous demandez n'existe pas.</p>
        </div>

        <Link to="/" className="link">
          Retourner sur la page d’accueil
        </Link>
      </div>
    </div>
  );
}
