import { Outlet, Link } from "react-router-dom";
import Upcoming from "./Upcoming";
import "./Webinar.css";
// import WebinarIndex from "./WebinarIndex";
import moreIcon from "../../../assets/School/icons/more-icon.svg";
import { useState } from "react";
// import { useLocation } from "react-router-dom";
// import SlotBooking from "./SlotBooking";
// import ReactPaginate from "react-paginate";

const Webinar = () => {
  const [track, setTrack] = useState("1");
  const [secTrack, setSecTrack] = useState("1");
  const [showNav, setShowNav] = useState(true);
  // const [pageNum, setPageNum] = useState(1)

  // const videoList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

  // const videoPerPage = 2;
  // const indexOfLastVideo = pageNum * videoPerPage
  // const indexOfFirstVideo = indexOfLastVideo - videoPerPage

  // const currentVideos = videoList.slice(indexOfFirstVideo, indexOfLastVideo)
  // console.log(currentVideos)

  // const pageCount = Math.ceil(videoList.length / videoPerPage);

  // const changePage = ({selected}) => {
  //     if(selected === 0) {
  //         setPageNum(1)
  //     } else {
  //         setPageNum(selected)
  //     }
  // }

  const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const tractFunc = (set, pick) => {
    nums.forEach((num) => {
      if (pick === num) {
        set(pick);
      }
    });
  };

  return (
    <>
      <div className="webinar">
        <div className="webinar-wrapper">
          {showNav && (
            <>
              <nav className="first-nav">
                <Link
                  to="/school/webinar"
                  onClick={() => tractFunc(setTrack, "1")}
                  className={track === "1" ? "add-border-btm" : ""}
                >
                  <span>All Webinars</span>
                </Link>
                <Link
                  to="/school/webinar/upcoming"
                  onClick={() => tractFunc(setTrack, "2")}
                  className={track === "2" ? "add-border-btm" : ""}
                >
                  <span>Upcoming Webinars</span>
                </Link>
                <Link
                  to="/school/webinar/past-web"
                  onClick={() => tractFunc(setTrack, "3")}
                  className={track === "3" ? "add-border-btm" : ""}
                >
                  <span>Past Webinars</span>
                </Link>
              </nav>

              <nav className="second-nav">
                <button
                  onClick={() => tractFunc(setSecTrack, "1")}
                  className={secTrack === "1" ? "on-country" : ""}
                >
                  All
                </button>
                <button
                  onClick={() => tractFunc(setSecTrack, "2")}
                  className={secTrack === "2" ? "on-country" : ""}
                >
                  Germany
                </button>
                <button
                  onClick={() => tractFunc(setSecTrack, "3")}
                  className={secTrack === "3" ? "on-country" : ""}
                >
                  Australian
                </button>
                <button
                  onClick={() => tractFunc(setSecTrack, "4")}
                  className={secTrack === "4" ? "on-country" : ""}
                >
                  Canada
                </button>
                <button
                  onClick={() => tractFunc(setSecTrack, "5")}
                  className={secTrack === "5" ? "on-country" : ""}
                >
                  Uk
                </button>
                <button
                  onClick={() => tractFunc(setSecTrack, "6")}
                  className={secTrack === "6" ? "on-country" : ""}
                >
                  New Zealand
                </button>
                <div className="more">
                  <img src={moreIcon} alt="more" />
                </div>
              </nav>
            </>
          )}

          {/* 
                <div className="paginate">
                    <ReactPaginate 
                      previousLabel={"<< Previous"}
                      nextLabel={"Next >>"}
                      pageCount={pageCount}
                      onPageChange={changePage}
                      containerClassName={"pagination-btns"}
                      previousLinkClassName={"prev-btn"}
                      nextLinkClassName={"next-btn"}
                      disabledClassName={"disable-btn"}
                      activeClassName={"active-btn"}
                    />
                </div> */}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Webinar;
