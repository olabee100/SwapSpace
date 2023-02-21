// styles
import "./Navbar.css";

// images and icons
import message from "../../../assets/Home/icons/logo.svg";
import { FaCaretDown } from "react-icons/fa";


// from react
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [ serviceDropDown, setServiceDropDown ] = useState(false);
  const [ schoolDropDown, setSchoolDropDown ] = useState(false);
  const [ exploreDropDown, setExploreDropDown ] = useState(false);

  const handleService = () => {
    setServiceDropDown(!serviceDropDown ? "true" : "");
    setSchoolDropDown(false);
    setExploreDropDown(false);
  };
  const handleSchool = () => {
    setSchoolDropDown(!schoolDropDown ? "true" : "");
    setServiceDropDown(false);
    setExploreDropDown(false);
  };
  const handleExplore = () => {
    setExploreDropDown(!exploreDropDown ? "true" : "");
    setServiceDropDown(false);
    setSchoolDropDown(false);
  };
  return (
    <div className="navbar">
      <div className="logo">
        <div>
          <img src={ message } alt={ message } />
        </div>
        <span>OFFER LETTER</span>
      </div>
      <ul className="nav-links">
        <li>Webinars</li>
        <li className="services">
          Services{ " " }
          <span className="fa-caret">
            <FaCaretDown />

            {/* <img src={arrowDown} alt="arrow-down" /> */ }
          </span>


          <div className="services-dropdown">
            <ul className="drop-down">
              <li className="services-study-abroad">
                Study Abroad
                <div className="study-abroad-dropdown">
                  <ul>
                    <li>Study in Canada</li>
                    <li>Study in Australia</li>
                    <li>Study in UK</li>
                    <li>Study in USA</li>
                    <li>Study in  NZ</li>
                    <li>Study in Europe</li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#mbbs-abroad"> MBBS in Abroad</a>
              </li>
              <li>
                <a href="#study-india">Study in India</a>
              </li>
              <li>
                <a href="#mbbs-india">MBBS in India </a>
              </li>
            </ul>
          </div>


        </li>

        <li className="schools">
          Schools{ " " }
          <span className="fa-caret">
            <FaCaretDown />

            {/* <img src={arrowDown} alt="arrow-down" /> */ }
          </span>

          <div className="schools-dropdown">
            <ul className="drop-down">
              <li>
                <Link to="/">Study Abroad</Link>
              </li>
              <li>
                <Link to="/"> MBBS in Abroad</Link>
              </li>
              <li>
                <Link to="/">Study in India</Link>
              </li>
              <li>
                <Link to="/">MBBS in India </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="explores">
          Explores{ " " }
          <span className="fa-caret">
            <FaCaretDown />
          </span>

          <div className="explores-dropdown">
            <ul className="drop-down">
              <li>
                <Link to="/">Study Abroad</Link>
              </li>
              <li>
                <Link to="/"> MBBS in Abroad</Link>
              </li>
              <li>
                <Link to="/">Study in India</Link>
              </li>
              <li>
                <Link to="/">MBBS in India </Link>
              </li>
            </ul>

          </div>
        </li>
      </ul>
      <ul className="nav-btns">
        <li >Profile Evaluation</li>
        <li className="login-btn">
          <Link to="/school/signup">Log in</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
