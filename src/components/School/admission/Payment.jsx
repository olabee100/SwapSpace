import "./Payment.css";
import facebookIcon from "../../../assets/School/icons/b-facebook-icon.svg";
import twitterIcon from "../../../assets/School/icons/b-twitter-icon.svg";
import linkedInIcon from "../../../assets/School/icons/b-linked-in-icon.svg";
import youtubeIcon from "../../../assets/School/icons/b-youtube-icon.svg";
import instagramIcon from "../../../assets/School/icons/b-instagram-icon.svg";

const Payment = () => {
  return (
    <div className="payment">
      <div className="above">
        <h1>Application</h1>
        <div>
          <div className="top">
            <span>Status</span>
            <span>School</span>
            <span>Course</span>
            <span>Specialization</span>
            <span>Start Date</span>
            <span>Fees</span>
          </div>
          <div className="bottom">
            <span>Accepted</span>
            <span>University of Toronto</span>
            <span>Computer Engineering</span>
            <span>Software Engineering</span>
            <span>
              11<sup>th</sup> May 2022
            </span>
            <span>$34000</span>
          </div>
        </div>
        <div>
          <span>You have no paid application</span>
          <button>Pay for Application</button>
        </div>
      </div>

      <div className="below">
        <div className="text">
          <p>©2022 OfferLetter.com</p>
          <div>
            <span>Privacy Policy</span>
            <span>Terms and Conditions</span>
            <span>About Us</span>
          </div>
        </div>
        <div className="icons">
          <div>
            <img src={facebookIcon} alt="facebook" />
          </div>
          <div>
            <img src={twitterIcon} alt="twitter" />
          </div>
          <div>
            <img src={linkedInIcon} alt="linked-in" />
          </div>
          <div>
            <img src={youtubeIcon} alt="youtube" />
          </div>
          <div>
            <img src={instagramIcon} alt="instagram" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
