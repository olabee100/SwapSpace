import { Route, Routes, useLocation } from "react-router-dom";
import Upcoming from "./Upcoming";
import Webinar from "./Webinar";
import WebinarIndex from "./WebinarIndex";
import SlotBooking from "./SlotBooking";

const WebinarPage = () => {
  const { pathname } = useLocation();
  return (
    <Routes>
      <Route path="" element={<Webinar />}>
        <Route index element={<WebinarIndex />} />
        {pathname === "/school/webinar/upcoming" && (
          <Route path=":upcoming" element={<Upcoming />} />
        )}
        {pathname === "/school/webinar/book-a-slot" && (
          <Route path=":book-a-slot" element={<SlotBooking />} />
        )}
      </Route>
    </Routes>
  );
};

export default WebinarPage;
