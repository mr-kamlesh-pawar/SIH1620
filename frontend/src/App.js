// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import HospitalList from "./components/HospitalList";
// import HospitalDetails from "./components/HospitalDetails";
// import "./styles.css";

// const App = () => {
//   const [hospitals, setHospitals] = useState([]);
//   const [selectedHospital, setSelectedHospital] = useState(null);

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         axios
//           .get("http://localhost:5000/api/hospitals", {
//             params: { latitude, longitude },
//           })
//           .then((response) => {
//             setHospitals(response.data);
//           })
//           .catch((error) => {
//             console.error("Error fetching hospitals:", error);
//           });
//       },
//       (error) => {
//         console.error("Error fetching location:", error);
//       }
//     );
//   }, []);

//   return (
//     <div className="app-container">
//       <h1>Nearby Hospitals</h1>
//       {selectedHospital ? (
//         <HospitalDetails
//           hospital={selectedHospital}
//           goBack={() => setSelectedHospital(null)}
//         />
//       ) : (
//         <HospitalList
//           hospitals={hospitals}
//           onHospitalClick={setSelectedHospital}
//         />
//       )}
//     </div>
//   );
// };

// export default App;

import React from "react";

import Banner from "./components/Banner.js";
import Service from "./components/Service.js";
import GoogleTranslate from "./components/GoogleTranslate.js";
import EmergencyButton from "./components/EmergencyButton.js";
import SearchHospitals from "./components/SearchHospitals.js";
import { FaCalendarCheck, FaHospital, FaUserMd } from "react-icons/fa";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ButtonGroup from "./components/ButtonGroup"; // Import the ButtonGroup component
import DoctorsPage from "./components/DoctorsPage"; // Import the new DoctorsPage component
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Home from "./components/Home.js";
import Specialists from "./components/Specialists.js";
import Services from "./components/Services.js";
import ContactUs from "./components/ContactUs.js";
import LoginSignUp from "./components/LoginSignUp.js";
import Emergency from "./components/Emergency.js";
import DoctorPage from "./components/DoctorsPage.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <>
      <Header />

      {/* <GoogleTranslate /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/specialists" element={<Specialists />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login/signup" element={<LoginSignUp />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/doctors" element={<DoctorPage />} />
        <Route path="/appointment" element={<Specialists />} />
        <Route path="/hospitals" element={<Emergency />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
