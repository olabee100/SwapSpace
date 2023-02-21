import bellIcon from "./../../assets/School/icons/bell-icon.svg";
import downIcon from "../../assets/School/icons/drop-down-icon.svg";
import { Outlet } from "react-router-dom";

import "./NavDash.css";

const NavDash = ({ showNavs }) => {
  return (
    <>
      {showNavs && (
        <div className="mainContainer">
          <div className="nav-dash-school">
            <div className="nav-wrapper">
              <div className="bell-icon">
                <img src={bellIcon} alt="bell-icon" />
              </div>
              <div className="cj-icon">
                <span>cj</span>
              </div>
              <span>Clara John</span>
              <div className="drp-dwn">
                <img src={downIcon} alt="down arror" />
              </div>
            </div>
          </div>
          <Outlet />
        </div>
      )}
    </>
  );
};

export default NavDash;
