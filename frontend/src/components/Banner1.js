import React from "react";

function Banner1() {
  return (
    <div className="bg-blue-100 py-12">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-4">
          Welcome to Hospital Management System
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Queuing models for OPDs, bed availability, patient admissions, and
          more
        </p>
        <button className="px-8 py-4 rounded-full bg-blue-500 text-white font-semibold text-lg hover:bg-blue-600 transition duration-300 shadow-lg">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Banner1;
