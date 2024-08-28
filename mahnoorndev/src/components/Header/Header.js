import React from "react";
import { Button } from "react-bootstrap";
import "./Header.css";

function Header({ title, subtitle, backgroundUrl}) {
  return (
    <header className="cover" style={{ backgroundImage: `url(${backgroundUrl})` }}>
      <div className="cover-background">
        <div className="overlay"></div>
        <div className="header-container text-center text-white">
          <h5 className="cover-h5">{title}</h5>
          <h2 className="cover-h2">{subtitle}</h2>
        </div>
      </div>
    </header>
  );
}

export default Header;
