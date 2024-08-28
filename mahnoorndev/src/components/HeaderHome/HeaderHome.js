import React from "react";
import { Button } from "react-bootstrap";
import landingPageImage from "../../assets/landing-page.png"; // Adjust the path based on your directory structure
import "./HeaderHome.css";

function HeaderHome({ title, subtitle, buttonText }) {
  return (
    <header
      className="cover"
      style={{ backgroundImage: `url(${landingPageImage})` }}
    >
      <div className="cover-background">
        <div className="overlay"></div>
        <div className="header-container text-center text-white">
          <h5 className="cover-h5">{title}</h5>
          <h2 className="cover-h2">{subtitle}</h2>
          <Button variant="secondary" size="sm" className="mx-auto">
            {buttonText}
          </Button>
        </div>
      </div>
    </header>
  );
}

export default HeaderHome;
