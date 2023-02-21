import "./Upcoming.css";
import upVImage from "../../../assets/School/images/up-v-image.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import ReactPaginate from "react-paginate";

const Upcoming = () => {
  const [pageNum, setPageNum] = useState(1);

  const videoList = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];

  const videoPerPage = 3;
  const indexOfLastVideo = pageNum * videoPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videoPerPage;

  const currentVideos = videoList.slice(indexOfFirstVideo, indexOfLastVideo);
  console.log(currentVideos);

  const pageCount = Math.ceil(videoList.length / videoPerPage);

  const changePage = ({ selected }) => {
    if (selected === 0) {
      setPageNum(1);
    } else {
      setPageNum(selected);
    }
  };

  return (
    <div className="upcoming-web">
      {/* <div className="pls-complete"></div>
            <div className="enroll">
                <p>Please complete Profile to Enrolle for Upcoming Webinar</p>
                <button>Complete Profile</button>
            </div> */}

      <h3>University of India</h3>
      <div className="up-v-wrap">
        {currentVideos.map((vid) => (
          <div key={vid} className="v-card">
            <div className="for-v">
              <video src="" controls poster={upVImage}></video>
            </div>
            <h2>HOW TO STUDY ABROAD video:{vid}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl
              faucibus neque, eu pulvinar amet enim sit ut. Risus gravida
              integer viverra in. Arcu odio auctor id proin nunc amet. Massa
              aenean tortor turpis ec.
            </p>
            <Link to="/school/webinar/book-a-slot">
              <button style={{ cursor: "pointer" }}>BOOK A SEAT</button>
            </Link>
          </div>
        ))}
      </div>

      <div className="up-v-wrap">
                    <div className="v-card">
                        <div className="for-v">
                            <video src="" controls poster={upVImage}></video>
                        </div>
                        <h2>HOW TO STUDY ABROAD</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl faucibus neque, eu pulvinar amet enim sit ut. Risus gravida integer viverra in. Arcu odio auctor id proin nunc amet. Massa aenean tortor turpis ec.</p>
                        <Link to='/dashboard/webinar/book-a-slot'>
                            <button>BOOK A SEAT</button>
                        </Link>
                    </div>
                    <div className="v-card">
                        <div className="for-v">
                            <video src="" controls poster={upVImage}></video>
                        </div>
                        <h2>HOW TO STUDY ABROAD</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl faucibus neque, eu pulvinar amet enim sit ut. Risus gravida integer viverra in. Arcu odio auctor id proin nunc amet. Massa aenean tortor turpis ec.</p>
                        <button>BOOK A SEAT</button>
                    </div>
                    <div className="v-card">
                        <div className="for-v">
                            <video src="" controls poster={upVImage}></video>
                        </div>
                        <h2>HOW TO STUDY ABROAD</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl faucibus neque, eu pulvinar amet enim sit ut. Risus gravida integer viverra in. Arcu odio auctor id proin nunc amet. Massa aenean tortor turpis ec.</p>
                        <button>BOOK A SEAT</button>
                    </div>                
                    <div className="v-card">
                        <div className="for-v">
                            <video src="" controls poster={upVImage}></video>
                        </div>
                        <h2>HOW TO STUDY ABROAD</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl faucibus neque, eu pulvinar amet enim sit ut. Risus gravida integer viverra in. Arcu odio auctor id proin nunc amet. Massa aenean tortor turpis ec.</p>
                        <button>BOOK A SEAT</button>
                    </div>
                    <div className="v-card">
                        <div className="for-v">
                            <video src="" controls poster={upVImage}></video>
                        </div>
                        <h2>HOW TO STUDY ABROAD</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl faucibus neque, eu pulvinar amet enim sit ut. Risus gravida integer viverra in. Arcu odio auctor id proin nunc amet. Massa aenean tortor turpis ec.</p>
                        <button>BOOK A SEAT</button>
                    </div>
                    <div className="v-card">
                        <div className="for-v">
                            <video src="" controls poster={upVImage}></video>
                        </div>
                        <h2>HOW TO STUDY ABROAD</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl faucibus neque, eu pulvinar amet enim sit ut. Risus gravida integer viverra in. Arcu odio auctor id proin nunc amet. Massa aenean tortor turpis ec.</p>
                        <button>BOOK A SEAT</button>
                    </div>
        </div>

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
      </div>
    </div>
  );
};

export default Upcoming;
