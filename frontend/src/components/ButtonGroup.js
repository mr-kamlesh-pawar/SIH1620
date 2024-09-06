import React from "react";
import { Link } from "react-router-dom";
import { FaHospital, FaUserMd, FaCalendarCheck, FaBed } from "react-icons/fa";
// Replace useHistory with useNavigate
import { useNavigate } from "react-router-dom";

function EmergencyButton({ tx, icon, link }) {
  // Use useNavigate instead of useHistory
  const navigate = useNavigate();

  const handleClick = () => {
    // Use navigate instead of history.push
    navigate(link);
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center justify-center w-[200px] px-4 py-4 rounded-md bg-blue-600 text-white font-bold text-lg hover:bg-blue-500 transition duration-300 shadow-lg space-x-3"
    >
      {icon}
      <span>{tx}</span>
    </button>
  );
}

function ButtonGroup() {
  return (
    <div className="flex justify-center mt-7 mb-7">
      <div className="w-[60%] flex justify-between space-x-4">
        <Link to="/appointment">
          <EmergencyButton
            tx="Book an Appointment"
            icon={<FaCalendarCheck className="text-xl" />}
            link="/appointment"
          />
        </Link>

        <Link to="/hospitals">
          <EmergencyButton
            tx="Hospitals"
            icon={<FaHospital className="text-xl" />}
            link="/hospitals"
          />
        </Link>

        <Link to="/doctors">
          <EmergencyButton
            tx="Doctors"
            icon={<FaUserMd className="text-xl" />}
            link="/doctors"
          />
        </Link>

        <Link to="/bed-availability">
          <EmergencyButton
            tx="Bed Availability"
            icon={<FaBed className="text-xl" />}
            link="/bed-availability"
          />
        </Link>
      </div>
    </div>
  );
}

export default ButtonGroup;
