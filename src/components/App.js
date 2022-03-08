import React from "react";
import Footer from "./common/Footer";
import Header from "./common/Header";
import HomePage from "./HomePage";
import NewRequest from "./NewRequest";
import { Route, Routes } from "react-router-dom";
import MyRequests from "./MyRequests";
import RequestDetails from "./RequestDetails/RequestDetails";
import Recurrence from "./RequestDetails/RequestRecurrence";
import TeamDesk from "./TeamDesk";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequestsRaised from "./RequestsRaised";

function App() {
  return (
    <>
      <ToastContainer autoClose={5000} />
      <Header />
      <Routes>
        <Route path="homepage" element={<HomePage />} />
        <Route
          path="requests/:request_id/recurrence"
          element={<Recurrence />}
        />
        <Route path="requests/:request_id" element={<RequestDetails />} />
        <Route path="requests-raised" element={<RequestsRaised />} />
        <Route path="team-desk" element={<TeamDesk />} />
        <Route path="new-request" element={<NewRequest />} />
        <Route path="my-requests" element={<MyRequests />} />
        <Route path="/" exact element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
