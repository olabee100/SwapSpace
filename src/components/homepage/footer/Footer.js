import "./Footer.css";
import facebook from "../../../assets/Home/icons/facebook.svg";
import twitter from "../../../assets/Home/icons/twitter.svg";
import youtube from "../../../assets/Home/icons/youtube.svg";
import instagram from "../../../assets/Home/icons/instagram.svg";
import vimeo from "../../../assets/Home/icons/vimeo.svg";
import linkedin from "../../../assets/Home/icons/linkedin.svg";
import behance from "../../../assets/Home/icons/behance.svg";
import message from "../../../assets/Home/icons/logo.svg";
//  assets/homepage/images/facebook-logo.png";



const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <div>
          <img src={ message } alt={ message } />
        </div>
        <span>OFFER LETTER</span>
      </div>

      <div className="footer-row">
        <div className="footer-col1">
          <div className="address">
            <p>
              Office no. G-02. <br />
              Building 1, Ground Floor. <br />
              Dubai Media City - Dubai
            </p>
          </div>

          <div className="time">
            <p >
              Available Everyday
            </p>
            <p className="gold">From 9:00 AM to 6:00 PM</p>
          </div>

          <div className="copyright">
            <p> Copyright © 2022 EduGlobe. All Rights Reserved</p>
          </div>

        </div>
        <div className="footer-col2">
          <div>
            <p className="about">About</p>
            <ul>
              <li>Our Story</li>
              <li>Our Services</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <p className="about">About</p>
            <ul>
              <li>Our Story</li>
              <li>Our Services</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>

        </div>
        <div className="footer-col3">
          <div className="div flex">
            <span>
              <img src={ facebook } alt="" />
            </span>
            <span>
              { " " }
              <img src={ twitter } alt="" />
            </span>
            <span>
              <img src={ linkedin } alt="" />
            </span>
            <span>
              { " " }
              <img src={ youtube } alt="" />
            </span>
            <span>
              { " " }
              <img src={ behance } alt="" />
            </span>
            <span>
              <img src={ instagram } alt="" />
            </span>
            <span>
              { " " }
              <img src={ vimeo } alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
