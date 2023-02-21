import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./AdmissionHome.css";
import AppliedAt from "./AppliedAt";
import AppStatus from "./AppStatus";

const AdmissionHome = () => {
  const { pathname } = useLocation();
  return (
    <Routes>
      <Route index element={<AppliedAt />} />
      <Route path=":application-status/*" element={<AppStatus />} />
    </Routes>
  );
};

export default AdmissionHome;