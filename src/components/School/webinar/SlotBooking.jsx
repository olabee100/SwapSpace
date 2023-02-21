import "./SlotBooking.css";
import uniLogo from "../../../assets/School/images/uni-logo.png";
import upVImage from "../../../assets/School/images/up-v-image.png";
import cIcon from "../../../assets/School/icons/c-icon.svg";
import { useState } from "react";

const SlotBooking = () => {
  const [bookSlot, setBookSlot] = useState(false);

  return (
    <div className="slot-booking">
      <div className="booking-wrap">
        <div className="head">
          <div>
            <div className="uni-logo">
              <img src={uniLogo} alt="uni-logo" />
            </div>
            <span>University of Torornto</span>
          </div>
          <h1>Webinar Sessions</h1>
          <h3>BACK</h3>
        </div>

        <div className="below-wrap">
          <h2>HOW TO STUDY ABROAD</h2>

          <div className="content">
            <div>
              <video src="" poster={upVImage} controls></video>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl
                faucibus neque, eu pulvinar amet enim sit ut. Risus gravida
                integer viverra in. Arcu odio auctor id proin nunc amet. Massa
                aenean tortor turpis ec. <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl
                faucibus neque, eu pulvinar amet enim sit ut. Risus gravida
                integer viverra in. Arcu odio auctor id proin nunc amet. Massa
                aenean tortor turpis ec. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nisl faucibus neque, eu pulvinar amet enim sit
                ut. Risus gravida integer viverra in. Arcu odio auctor id proin
                nunc amet. Massa aenean tortor turpis ec.
              </p>
              <span>BY DR. WHYNE</span>
            </div>
          </div>

          <h4>ABOUT</h4>

          <div className="below-about">
            <div className="reg">
              <span>80</span>
              <span>Registered</span>
            </div>

            <div className="calendar">
              <div>
                <span>Date</span>
                <span>Day</span>
                <span>Month</span>
                <span>Year</span>
              </div>
              <div>
                <div className="c-icon">
                  <img src={cIcon} alt="calendar" />
                </div>
                <span>02</span>
                <span>06</span>
                <span>2022</span>
              </div>
            </div>

            {!bookSlot && (
              <button className="btn-one" onClick={() => setBookSlot(true)}>
                Book a Slot
              </button>
            )}
            {bookSlot && (
              <button className="btn-two">Slot Booked Successfully</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlotBooking;
