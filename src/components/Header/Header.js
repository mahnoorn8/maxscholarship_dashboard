import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import {
  faGraduationCap,
  faTrophy,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="cover">
      <div className="cover-background">
        <h5 className="cover-h5">MAX Scholarship Fund</h5>
        <h2 className="cover-h2">Applications for 2023 are now open</h2>
        <button className="apply-cover-button">
          <FontAwesomeIcon icon={faArrowRightToBracket} className="nav-apply" />
          Apply Now
        </button>
      </div>
    </div>
  );
}

export default Header;
