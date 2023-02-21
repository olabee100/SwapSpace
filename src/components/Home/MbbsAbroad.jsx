import "./MbbsAbroad.css";

//images and icon
import slider1 from "./../../assets/Home/images/slider-image1.png";
import slider2 from "./../../assets/Home/images/slider-image2.png";
import slider3 from "./../../assets/Home/images/slider-image3.png";

// from react
import { useState } from "react";

const MbbsAbroad = () => {
  const images = [slider1, slider2, slider3];
  const [slideImage, setSlideImage] = useState(1);
  return (
    <section id="mbbs-abroad">
      <div className="images-slider-card">
        <div className="images-slider-cover">
          <div className="slider-image">
            <div className={slideImage === 1 ? "slide-center" : ""}>
              <div className={slideImage === 3 ? "slide-right" : ""}>
                <img src={images[0]} alt="" />
              </div>
            </div>
          </div>
          <div className="slider-image">
            <div
              className={slideImage === 2 ? "slide-center-two" : ""}
              style={{ transform: slideImage === 1 ? "translateX(150px)" : "" }}
            >
              <div className={slideImage === 3 ? "slide-left" : ""}>
                <img src={images[1]} alt="" />
              </div>
            </div>
          </div>
          <div className="slider-image">
            <div className={slideImage === 3 ? "slide-center-three" : ""}>
              <div
                style={{
                  position: slideImage === 1 ? "relative" : "",
                  right: "200%",
                }}
              >
                <img src={images[2]} alt="" />
              </div>
            </div>
          </div>

          <div className=" dots">
            <div
              onClick={() => setSlideImage(1)}
              style={{ background: slideImage === 1 ? "white" : "" }}
            ></div>
            <div
              onClick={() => setSlideImage(2)}
              style={{ background: slideImage === 2 ? "white" : "" }}
            ></div>
            <div
              onClick={() => setSlideImage(3)}
              style={{ background: slideImage === 3 ? "white" : "" }}
            ></div>
          </div>
        </div>
      </div>
      <div className="section-text">
        <h1>Study MBBS Abroad</h1>
        <div>
          Can we take this offline we need to think big start small and <br />{" "}
          scale fast to energize our clients or the last person we talked <br />{" "}
          to said this would be ready nor get buy-in. Wiggle room ensure <br />{" "}
          to follow requirements when developing solutions or high <br /> touch
          client so individual get six alpha pups in here for a focus <br />{" "}
          group.
        </div>
        <button className="btn">Learn More</button>
      </div>
    </section>
  );
};

export default MbbsAbroad;
