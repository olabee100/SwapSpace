import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import components
import Homepage from "./pages/Home/Homepage";
// students
// import PhoneCode from "./components/Student/PhoneCode";
// import StudentSignup from "./pages/Student/signup/Signup";
// import StudentDashboard from "./pages/Student/studentDashboard/StudentDashboard";

// school
import SchoolSignup from "./pages/School/signup/Signup";
import SchoolDashboard from "./pages/School/schoolDashboard/SchoolDashboard";
import { UnderProcess , RejectedApplication } from "./components/School/application";
import Acceptedapp from "./components/School/Accepted/Acceptedapp"
import Upcoming from "./components/School/webinar/Upcoming";
import SchoolForm from "../src/schoolForm/schoolForm";




// f_university

// agent

// admin
// import AdminSignup from "./pages/Admin/signup/Signup";
// import AdminDashboard from "./pages/Admin/AdminComp/Dashboard";

// style
import "./App.css";
import WebinarIndex from "./components/School/webinar/WebinarIndex";

import SchoolCommision from "./pages/School/schoolDashboard/SchoolCommision";
import SchoolStudent from "./pages/School/schoolDashboard/SchoolStudent";
import SchoolApplication from "./pages/School/schoolDashboard/SchoolApplication";



function App() {
  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Homepage />} />

        {/* Student */}
        {/* <Route path="/student/signup" element={<StudentSignup />} />
        <Route path="/student/dashboard/*" element={<StudentDashboard />} /> */}

        {/* School */}
        <Route path="/school/signup" element={<SchoolSignup />} />
        <Route path="/school/dashboard/" element={<SchoolDashboard />} />
        <Route path="/school/dashboard/application" element={<SchoolApplication />} />
        <Route path="/school/dashboard/accepted" element={<Acceptedapp />} />
        <Route path="/school/dashboard/pending" element={<UnderProcess />} />
        <Route path="/school/dashboard/rejected" element={<RejectedApplication />} />
        <Route path="/school/dashboard/webinar/past" element={<Upcoming />} />
        <Route path="/school/dashboard/webinar/upcoming" element={<WebinarIndex/>} />
        <Route path="/school/dashboard/commisions" element={<SchoolCommision/>} />
        <Route path="/school/dashboard/studentprofile" element={<SchoolStudent/>} />
        <Route path="/school/signup/form" element={<SchoolForm />} />
        
       

        {/* F_University */}
        {/* <Route path="/universities/signup" element={<Signup />} />
        <Route
          path="/universities/dashboard/*"
          element={<StudentDashboard />}
        /> */}

        {/* Agent */}
        {/* <Route path="/agents/signup" element={<Signup />} />
        <Route path="/agents/dashboard/*" element={<StudentDashboard />} /> */}

        {/* Admin */}
        {/* <Route path="/admin/signup" element={<AdminSignup />} />
        <Route path="/admin/dashboard/*" element={<AdminDashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
