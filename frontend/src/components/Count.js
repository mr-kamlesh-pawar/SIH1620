import React from "react";

function Count({ number, label }) {
  return (
    <div className="flex items-center">
      <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:bg-blue-50 transition-colors duration-300">
        <div className="text-4xl font-extrabold text-blue-800">{number}</div>
        <div className="text-lg font-medium text-gray-700 mt-2">{label}</div>
      </div>
    </div>
  );
}

export default Count;
