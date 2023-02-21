import { useState } from "react";
import { Link } from "react-router-dom";
// styles
// icons and images
// import boy from "../../assets/Home/images/boy.png";
// import plane from "../../assets/Home/images/plane.png";
// import sphere from "../../assets/Home/images/sphere.png";
// import university from "../../assets/Home/images/university.png";
// import webinarPic from "../../assets/Home/images/webinar-pic.png";
// import computerRoom from "../../assets/Home/images/computer-room.png";
// import testimonialPic1 from "../../assets/Home/images/testimonial-pic1.png";
// import testimonialPic2 from "../../assets/Home/images/testimonial-pic2.png";
// import testimonialPic3 from "../../assets/Home/images/testimonial-pic3.png";
// components
// import Footer from "./../../components/Home/Public/Footer";
// import Navbar from "./../../components/Home/Public/Navbar";
// import StudyAbroad from "./../../components/Home/StudyAbroad";
// import MbbsAbroad from "./../../components/Home/MbbsAbroad";
// import StudyIndia from "./../../components/Home/StudyIndia";
// import MbbsIndia from "./../../components/Home/MbbsIndia";

import Footer from "../../components/homepage/footer/Footer";
import Navbar from "../../components/homepage/nav-bar/Navbar";
import Header from "../../components/homepage/Header";
import StudyAbroad from "../../components/homepage/study-abroad/StudyAbroad";
import MbbsAbroad from "../../components/homepage/mbs-abroad/MbbsAbroad";
import StudyIndia from "../../components/homepage/StudyIndia";
import MbbsIndia from "../../components/homepage/MbbsIndia";
import Stats from "../../components/homepage/Stats";
import Facilities from "../../components/homepage/Facilities";
import Webinar from "../../components/homepage/Webinar";
import Testimony from "../../components/homepage/testimony/Testimony";

import "./Homepage.css";

// swiper package components
// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Homepage = () => {
  // const webinarPics = [webinarPic, webinarPic, webinarPic];
  // const [webinarSlider, setWebinarSlider] = useState(1);
  // const testimonialPics = [
  //   testimonialPic1,
  //   testimonialPic2,
  //   testimonialPic3,
  //   testimonialPic1,
  // ];

  return (
    // <div className="homepage">
    //   <div className="navbar">
    //     <Navbar />
    //   </div>
    //   <div className="home-header">
    //     <div>
    //       <h1>
    //         We create a brighter future <br /> to educate by bring great <br />{" "}
    //         scholars
    //       </h1>
    //       <button className="btn">Profile Evaluation</button>
    //     </div>
    //   </div>
    //   <div className="study-abroad">
    //     <StudyAbroad />
    //   </div>
    //   <div className="mbbs-abroad">
    //     <MbbsAbroad />
    //   </div>
    //   <div className="study-india">
    //     <StudyIndia />
    //   </div>
    //   <div className="mbbs-india">
    //     <MbbsIndia />
    //   </div>

    //   <div className="stat-box">
    //     <div>
    //       <img src={boy} alt="" />
    //       <h1 style={{ marginTop: "20px" }}>7000+</h1>
    //       <h3>Students Trained</h3>
    //     </div>
    //     <div>
    //       <img src={plane} alt="" style={{ transform: "translateY(25px)" }} />
    //       <h1 style={{ marginTop: "60px" }}>1000+</h1>
    //       <h3>Students Sent Abroad</h3>
    //     </div>
    //     <div>
    //       <img src={sphere} alt="" style={{ transform: "translateY(20px)" }} />
    //       <h1 style={{ marginTop: "55px" }}>12</h1>
    //       <h3>
    //         Countries Around the <br /> world
    //       </h3>
    //     </div>
    //   </div>
    //   <div className="facilities">
    //     <div className="facilities-col">
    //       <div>
    //         <img src={university} alt="" />
    //       </div>
    //       <div>
    //         <h3>
    //           Study In top universities around the <br /> world
    //         </h3>
    //         <p>
    //           We believe in your dreams and we strive <br /> hard to make your
    //           dreams come true.
    //         </p>
    //       </div>
    //     </div>
    //     <div className="facilities-col">
    //       <div>
    //         <img src={computerRoom} alt="" />
    //       </div>
    //       <div>
    //         <h3 style={{ marginBottom: "33px" }}>
    //           Meet Expert around the world
    //         </h3>
    //         <p>
    //           great webinar with top expert to set and <br /> guide you on your
    //           career path. <br />
    //           JOIN US NOW
    //         </p>
    //       </div>
    //     </div>
    //     <div className="facilities-col">
    //       <div>
    //         <img src={university} alt="" />
    //       </div>
    //       <div>
    //         <h3>
    //           Study In top universities around the <br /> world
    //         </h3>
    //         <p>
    //           We believe in your dreams and we strive <br /> hard to make your
    //           dreams come true.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="webinar-section">
    //     <h1>Webinar Session</h1>
    //     <div className="webinar-flex">
    //       <div className="webinar-slider">
    //         {webinarSlider === 1 && <img src={webinarPics[0]} alt="" />}
    //         {webinarSlider === 2 && <img src={webinarPics[1]} alt="" />}
    //         {webinarSlider === 3 && <img src={webinarPics[2]} alt="" />}
    //         <div className=" webinar-dots">
    //           <div
    //             onClick={() => setWebinarSlider(1)}
    //             style={{ background: webinarSlider === 1 ? "white" : "" }}
    //           ></div>
    //           <div
    //             onClick={() => setWebinarSlider(2)}
    //             style={{ background: webinarSlider === 2 ? "white" : "" }}
    //           ></div>
    //           <div
    //             onClick={() => setWebinarSlider(3)}
    //             style={{ background: webinarSlider === 3 ? "white" : "" }}
    //           ></div>
    //         </div>
    //       </div>
    //       <div className="webinar-text">
    //         <h3>How to submit a CV</h3>
    //         <p>
    //           Having a good CV goes a long way in boosting <br /> your
    //           application, in this video you will learn <br /> certain criterias
    //           required to create and submit <br /> your the right way.
    //         </p>
    //         <button className="btn">Join Webinar</button>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="testimony-section">
    //     <div className="testimony-hold">
    //     <h1>OUR TESTIMONY</h1>
    //     <Swiper
    //       modules={[Navigation, Pagination]}
    //       spaceBetween={10}
    //       slidesPerView={1.5}
    //       navigation
    //       pagination={{ clickable: true }}
    //       onSwiper={(swiper) => console.log(swiper)}
    //       onSlideChange={() => console.log("slide change")}
    //     >
    //       {testimonialPics.map((pic) => (
    //         <SwiperSlide key={pic} className="testi-swiper">
    //           <div className="swiper-img">
    //             <img src={pic} alt="" />
    //           </div>
    //           <div className="swiper-text">
    //             <p>
    //               Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
    //               <br />
    //               Vitae nisl, vitae mattis turpis justo velit tempor. Id
    //               interdum <br />
    //               ipsum, vel mi neque, dolor, sed mi morbi. Netus est dolor{" "}
    //               <br /> scelerisque gravida congue pulvinar. Fermentum, nisi{" "}
    //               <br />
    //               neque, at natoque nulla semper massa vestibulum <br />
    //               ullamcorper. Aliquam quis sed nulla donec pretium eget <br />
    //               ultricies lacus. A mi neque elit maecenas lorem in risus ac{" "}
    //               <br />
    //               commodo. Dui et commodo, egestas consectetur <br />{" "}
    //               sollicitudin et justo semper.
    //             </p>
    //             <h3>Jerome Bell</h3>
    //           </div>
    //         </SwiperSlide>
    //       ))}
    //     </Swiper>
    //   </div>
    //   </div>
    //   <div className="footer">
    //     <Footer />
    //   </div>
    // </div>
    <div className="homepage">
      <div>
        <Navbar />
      </div>
      <div>
        <Header />
      </div>
      <div className="study-abroad">
        <StudyAbroad />
      </div>
      <div className="mbbs-abroad">
        <MbbsAbroad />
      </div>
      <div className="study-india">
        <StudyIndia />
      </div>
      <div className="mbbs-india">
        <MbbsIndia />
      </div>
      <div>
        <Stats />
      </div>
      <div>
        <Facilities />
      </div>
      <div>
        <Webinar />
      </div>
      <div>
        <Testimony />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
