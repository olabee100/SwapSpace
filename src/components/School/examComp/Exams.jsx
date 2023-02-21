import "./Exams.css";
import ExamHome from "./ExamHome";
import { Route, Routes } from "react-router-dom";
import GmatPage from "./GmatPage";

const Exams = () => {
  return (
    <div className="exams-page">
      <Routes>
        <Route index element={<ExamHome />} />
        <Route path=":gmat" element={<GmatPage />} />
      </Routes>
    </div>
  );
};

export default Exams;
