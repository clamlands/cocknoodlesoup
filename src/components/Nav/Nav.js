import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./NavStyle.css";
import cock from "../../media/images/cocknoodlesoup-browser-icon-150.webp";

export default function Nav() {
  const [burgerClass, setBurgerClass] = useState("burger-bar closed");
  const [menuClass, setMenuClass] = useState("menu");
  const [menuOpen, setMenuOpen] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!menuOpen) {
      setBurgerClass("burger-bar open");
      setMenuClass("menu open");
    } else {
      setBurgerClass("burger-bar closed");
      setMenuClass("menu");
    }
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header>
        <div className="title-items">
          <Link to="/cocknoodlesoup">
            <img
              src={cock}
              alt="Cocknoodlesoup logo"
              className="logo"
              width="150"
              height="157"
            />
          </Link>
          <Link to="/cocknoodlesoup" className="no-underline">
            <h1 className="title">cocknoodlesoup</h1>
          </Link>
        </div>
        <div
          className="burger"
          onClick={() => {
            updateMenu();
          }}
        >
          <div className={burgerClass} />
          <div className={burgerClass} />
          <div className={burgerClass} />
        </div>
        <nav className={menuClass}>
          <NavLink
            to="/cocknoodlesoup"
            onClick={() => {
              updateMenu();
            }}
            className="nav-link"
          >
            HOME
          </NavLink>
          <NavLink
            to="/blog"
            onClick={() => {
              updateMenu();
            }}
            className="nav-link"
          >
            BLOG
          </NavLink>
          <NavLink
            to="/media"
            onClick={() => {
              updateMenu();
            }}
            className="nav-link"
          >
            MEDIA
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => {
              updateMenu();
            }}
            className="nav-link"
          >
            CONTACT
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
