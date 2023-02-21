import "./Footer.css";
import facebook from "./../../../assets/Home/images/facebook-logo.png";
import twitter from "./../../../assets/Home/images/twitter.png";
import youtube from "./../../../assets/Home/images/youtube.png";
import instagram from "./../../../assets/Home/images/instagram.png";
import inIcon from "./../../../assets/Home/images/in-logo.png";
import beIcon from "./../../../assets/Home/images/Be-logo.png";
import vIcon from "./../../../assets/Home/images/V-logo.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-col1">
        <div className="logo">LOGO</div>
        <p>
          Office no. G-02. <br />
          Building 1, Ground Floor. <br />
          Dubai Media City - Dubai <br />{" "}
        </p>

        <p style={{ paddingBottom: "10px" }}>
          {" "}
          Available Everyday <br />
        </p>
        <span>From 9:00 AM to 6:00 PM</span>
        <h5> Copyright © 2022 EduGlobe. All Rights Reserved</h5>
      </div>
      <div className="footer-col2">
        <div>
          <h1>About</h1>
          <div>
            <li>Our Story</li>
            <li>Our Services</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </div>
        </div>
        <div>
          <h1>About</h1>
          <div>
            <li>Our Story</li>
            <li>Our Services</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </div>
        </div>
      </div>
      <div className="footer-col3">
        <div className="div">
          <span>
            <img src={facebook} alt="" />
          </span>
          <span>
            {" "}
            <img src={twitter} alt="" />
          </span>
          <span>
            <img src={inIcon} alt="" />
          </span>
          <span>
            {" "}
            <img src={youtube} alt="" />
          </span>
          <span>
            {" "}
            <img src={beIcon} alt="" />
          </span>
          <span>
            <img src={instagram} alt="" />
          </span>
          <span>
            {" "}
            <img src={vIcon} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
