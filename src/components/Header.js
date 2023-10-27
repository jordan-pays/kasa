import React from "react";
import logo from "../assets/logoKasa.png";
import "../css/Header.css";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="logo du site" />
      <nav>
        <NavLink className={({ isActive }) => (`${isActive ? "underline" : ""} nav_item`)} to="/">
          Accueil
        </NavLink>
        <NavLink className={({ isActive }) => (`${isActive ? "underline" : ""} nav_item`)} to="/a-propos">
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}
