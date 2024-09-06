import React from "react";
import { FaUserMd, FaStethoscope, FaClock } from "react-icons/fa";

const DoctorCard = ({ name, specialization, available }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
      <div className="flex items-center mb-4">
        <FaUserMd className="text-4xl text-blue-500 mr-4" />
        <div>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-gray-600">{specialization}</p>
        </div>
      </div>
      <div className="flex items-center mb-4">
        <FaClock className="text-xl text-green-500 mr-2" />
        <p
          className={`text-lg ${available ? "text-green-600" : "text-red-600"}`}
        >
          {available ? "Available" : "Not Available"}
        </p>
      </div>
      <button className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-500 transition duration-300">
        Book Appointment
      </button>
    </div>
  );
};

export default DoctorCard;
