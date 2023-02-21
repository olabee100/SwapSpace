import { Route, Routes } from "react-router-dom";
import ProfDocuments from "./ProfDocuments";
import "./Profile.css";
import ViewProfile from "./ViewProfile";

const Profile = () => {
  return (
    <Routes>
      <Route index element={<ViewProfile />} />
      <Route path=":documents" element={<ProfDocuments/>} />
    </Routes>
  );
};

export default Profile;
