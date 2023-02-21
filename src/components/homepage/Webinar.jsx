import { useState } from "react";
import webinarPic from "../../assets/Home/images/webinar-pic.png";

const Webinar = () => {
  const webinarPics = [webinarPic, webinarPic, webinarPic];
  const [webinarSlider, setWebinarSlider] = useState(1);

  return (
    <div className="webinar-section">
      <h1 className="text-5xl">Webinar Session</h1>
      <div className="webinar-flex">
        <div className="webinar-slider">
          {webinarSlider === 1 && <img src={webinarPics[0]} alt="" />}
          {webinarSlider === 2 && <img src={webinarPics[1]} alt="" />}
          {webinarSlider === 3 && <img src={webinarPics[2]} alt="" />}
          <div className=" webinar-dots">
            <div
              onClick={() => setWebinarSlider(1)}
              style={{ background: webinarSlider === 1 ? "white" : "" }}
            ></div>
            <div
              onClick={() => setWebinarSlider(2)}
              style={{ background: webinarSlider === 2 ? "white" : "" }}
            ></div>
            <div
              onClick={() => setWebinarSlider(3)}
              style={{ background: webinarSlider === 3 ? "white" : "" }}
            ></div>
          </div>
        </div>
        <div className="webinar-text">
          <h3>How to submit a CV</h3>
          <p>
            Having a good CV goes a long way in boosting <br /> your
            application, in this video you will learn <br /> certain criterias
            required to create and submit <br /> your the right way.
          </p>
          <a href="join" className="join">
            Join Webinar
          </a>
        </div>
      </div>
    </div>
  );
};

export default Webinar;
