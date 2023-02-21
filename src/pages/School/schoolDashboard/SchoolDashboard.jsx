// import { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import { useLocation } from "react-router-dom";

// import NavDash from "./../../../components/School/NavDash";
// import Sidebar from "./../../../components/School/Sidebar";
// import UniPage from "./../../../components/School/uniPage/UniPage";
// import Exams from "./../../../components/School/examComp/Exams";
// import Profile from "./../../../components/School/profile/Profile";
// import Inbox from "./../../../components/School/inbox/Inbox";
// import AdmissionHome from "./../../../components/School/admission/AdmissionHome";
// import Dashboard from "./../../../components/School/schoolComp/Dashboard";
// import WebinarPage from "./../../../components/School/webinar/webinarPage";
// import PersonalHome from "./../../../components/School/personalProfile/PersonalHome";
// import AppStatus from "./../../../components/School/admission/AppStatus";

// import "./SchoolDashboard.css";
// import Dashboard2 from "../../../components/School/schoolComp/Dashboard2";
// import Acepted from "../../../components/School/Accepted/Accepted"

import { Routes, Route } from "react-router-dom";
import Navbar from "../../../components/School/Navbar";
import SchoolDashboardPage from "./SchoolDashboardPage";
import SchoolCommision from "./SchoolCommision";
import SchoolApplication from "./SchoolApplication";
import SchoolStudent from "./SchoolStudent";
import ApplicationStatus from "./ApplicationStatus";
// import UnderProcess from "../../../components/School/application/UnderProcess/UnderProcess";


const StudentDashboard = () => {
  // const [onUni, setOnUni] = useState(false);
  // const [onSpecial, setOnSpecial] = useState(false);
  // const [onExams, setOnExams] = useState(false);
  // const [showNavs, setShowNavs] = useState(true);

  // const handleOnUni = () => {
  //   setOnSpecial(false);
  //   setOnExams(false);
  //   setOnUni(true);
  // };

  // const handleOnSpecial = () => {
  //   setOnUni(false);
  //   setOnExams(false);
  //   setOnSpecial(true);
  // };

  // const handleOnExams = () => {
  //   setOnUni(false);
  //   setOnSpecial(false);
  //   setOnExams(true);
  // };

  // const sidebarProps = {
  //   onUni,
  //   onSpecial,
  //   onExams,
  //   handleOnExams,
  //   handleOnUni,
  //   handleOnSpecial,
  // };

  // const { pathname } = useLocation();
  return (
    // <Routes>
    //   <Route
    //     path=""
    //     element={<Sidebar sidebarProps={sidebarProps} showNavs={showNavs} />}
    //   >
    //     <Route path="" element={<NavDash showNavs={showNavs} />}>
    //       <Route index element={<Dashboard2 />} />
    //       {pathname.includes("/school/unipage") && (
    //         <Route
    //           path="/school/unipage"
    //           element={
    //             <UniPage
    //               sidebarProps={sidebarProps}
    //               setShowNavs={setShowNavs}
    //             />
    //           }
    //         />
    //       )}
    //       {pathname.includes("/school/exams") && (
    //         <Route path=":exams/*" element={<Exams />} />
    //       )}
    //       {pathname.includes("/school/admission") && (
    //         <Route path=":admission/*" element={<AdmissionHome />} />
    //       )}
    //       {pathname.includes("/school/profile") && (
    //         <Route path=":profile/*" element={<Profile />} />
    //       )}
    //       {pathname.includes("/school/inbox") && (
    //         <Route path=":inbox" element={<Inbox />} />
    //       )}
    //       {pathname.includes("/school/webinar") && (
    //         <Route path=":webinar/*" element={<WebinarPage />} />
    //       )}
    //       {pathname.includes("/school/personal") && (
    //         <Route
    //           path=":personal/*"
    //           element={<PersonalHome setShowNavs={setShowNavs} />}
    //         />
    //       )}
    //     </Route>
    //   </Route>
    //       <Route index element={<Acepted />} />

    // </Routes>

    <div>
    <Navbar />
    <div>
        <Routes>
          <Route path="/" element={<SchoolDashboardPage />} />
          <Route path="/commisions" element={<SchoolCommision />} />
          <Route path="/applications" element={<SchoolApplication />} />
          <Route path="/applications/:id" element={<ApplicationStatus />} />
          <Route path="/student" element={<SchoolStudent />} />
          {/* <Route path="/process" element={<UnderProcess />} /> */}
        </Routes>
    </div>
  </div>
  );
};

export default StudentDashboard;
