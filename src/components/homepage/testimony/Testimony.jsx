// import styles
import "./Testimony.css";

// icons and images
import testimonialPic1 from "../../../assets/Home/images/testimonial-pic1.png";
import testimonialPic2 from "../../../assets/Home/images/testimonial-pic2.png";
import testimonialPic3 from "../../../assets/Home/images/testimonial-pic3.png";
import arrow1 from "../../../assets/Home/images/arrow1.svg";
import arrow2 from "../../../assets/Home/images/arrow2.svg";
// import hooks
import { useRef } from "react";

const Testimonial = () => {
  const testimonialPics = [testimonialPic1, testimonialPic2, testimonialPic3];

  // create dummy testimonies
  const testimonyData = [
    {
      name: "Jerome Bell",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nisl, vitae mattis turpis justo velit tempor. Id interdum ipsum, vel mi neque, dolor, sed mi morbi. Netus est dolor scelerisque gravida congue pulvinar. Fermentum, nisi neque, at natoque nulla semper massa vestibulum ullamcorper. Aliquam quis sed nulla donec pretium eget ultricies lacus. A mi neque elit maecenas lorem in risus ac commodo. Dui et commodo, egestas consectetur sollicitudin et justo semper.",
    },
    {
      name: "Jerome Bell",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nisl, vitae mattis turpis justo velit tempor. Id interdum ipsum, vel mi neque, dolor, sed mi morbi. Netus est dolor scelerisque gravida congue pulvinar. Fermentum, nisi neque, at natoque nulla semper massa vestibulum ullamcorper. Aliquam quis sed nulla donec pretium eget ultricies lacus. A mi neque elit maecenas lorem in risus ac commodo. Dui et commodo, egestas consectetur sollicitudin et justo semper.",
    },
    {
      name: "Jerome Bell",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nisl, vitae mattis turpis justo velit tempor. Id interdum ipsum, vel mi neque, dolor, sed mi morbi. Netus est dolor scelerisque gravida congue pulvinar. Fermentum, nisi neque, at natoque nulla semper massa vestibulum ullamcorper. Aliquam quis sed nulla donec pretium eget ultricies lacus. A mi neque elit maecenas lorem in risus ac commodo. Dui et commodo, egestas consectetur sollicitudin et justo semper.",
    },
  ];

  // get elements
  const dotsEl = useRef(null);
  const testimoniesEl = useRef(null);

  // add bg to dot
  function setDot(index) {
    const dotEls = dotsEl.current.childNodes;
    dotEls.forEach((child) => {
      child.classList.remove("selected");
    });
    dotEls[index].classList.add("selected");
  }

  // translate element
  function translateX(index) {
    const testimonyEls = testimoniesEl.current.childNodes;
    testimonyEls.forEach((el) => {
      el.style.transform = `translateX(-${+index * 100}%)`;
    });
  }

  // handleDot when selected
  function handleDot(e) {
    const index = e.currentTarget.dataset.index;
    position = +index;
    setDot(position);
    translateX(position);
  }

  // handleSlide when clicked
  let position = 0;
  function handleSlide(e) {
    const direction = e.currentTarget.dataset.slide;
    const testimonyEls = testimoniesEl.current.childNodes;
    const max = testimonyEls.length - 1;

    if (direction === "right") {
      if (position >= max) return;
      position++;
      setDot(position);
      translateX(position);
    } else if (direction === "left") {
      if (position < 1) return;
      position--;
      setDot(position);
      translateX(position);
    }
  }

  // map through testimony data
  const testimony = testimonyData.map((testimony, i) => {
    const prev = i - 1 < 0 ? testimonyData.length - 1 : i - 1;
    const next = i + 1 > testimonyData.length - 1 ? 0 : i + 1;

    return (
      <div key={i} className="testimony flex justify-between">
        <div
          className="control prev w-[178px]"
          onClick={handleSlide}
          data-slide="left"
        >
          <img
            className="h-full"
            src={testimonialPics[prev]}
            alt={`testimony 0${prev}`}
          />
          <div className="overlay">
            <img src={arrow2} alt="" />
          </div>
        </div>
        <div className="current w-[65%]">
          <div className="image ">
            <img
              className="h-full"
              src={testimonialPics[i]}
              alt={`testimony 0${i}`}
            />
          </div>
          <div className="text-name w-3/4">
            <p>{testimony.text}</p>
            <div className="user-name mt-4">
              <p>{testimony.name}</p>
            </div>
          </div>
        </div>
        <div
          className="control next w-[178px]"
          onClick={handleSlide}
          data-slide="right"
        >
          <img
            className="h-full"
            src={testimonialPics[next]}
            alt={`testimony 0${next}`}
          />
          <div className="overlay">
            <img src={arrow1} alt="" />
          </div>
        </div>
      </div>
    );
  });

  const dots = testimonyData.map((dot, i) => (
    <div
      key={i}
      className={`dot ${i === 0 ? "selected" : ""} `}
      onClick={handleDot}
      data-index={i}
    ></div>
  ));

  return (
    <div className="testimony-section">
      <h1 className="text-5xl font-semibold">OUR TESTIMONY</h1>
      <div className="testimony-slider" ref={testimoniesEl}>
        {testimony}
      </div>
      <div className="slide-dots" ref={dotsEl}>
        {dots}
      </div>
      {/* <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1.5}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {testimonialPics.map((pic) => (
            <SwiperSlide key={pic} className="testi-swiper">
              <div className="swiper-img">
                <img src={pic} alt="" />
              </div>
              <div className="swiper-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  <br />
                  Vitae nisl, vitae mattis turpis justo velit tempor. Id
                  interdum <br />
                  ipsum, vel mi neque, dolor, sed mi morbi. Netus est dolor{" "}
                  <br /> scelerisque gravida congue pulvinar. Fermentum, nisi{" "}
                  <br />
                  neque, at natoque nulla semper massa vestibulum <br />
                  ullamcorper. Aliquam quis sed nulla donec pretium eget <br />
                  ultricies lacus. A mi neque elit maecenas lorem in risus ac{" "}
                  <br />
                  commodo. Dui et commodo, egestas consectetur <br />{" "}
                  sollicitudin et justo semper.
                </p>
                <h3>Jerome Bell</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}
    </div>
  );
};

export default Testimonial;
