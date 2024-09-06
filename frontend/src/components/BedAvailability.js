import React from "react";

function BedAvailability() {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg my-10 mx-auto max-w-4xl">
      <h2 className="text-3xl font-semibold text-blue-900 mb-6">
        Bed Availability
      </h2>
      <p className="text-gray-700 mb-4">
        Track the real-time availability of hospital beds and admission status.
      </p>
      <ul className="list-disc list-inside">
        <li className="mb-2">Live bed occupancy and status updates</li>
        <li className="mb-2">
          Predict bed availability based on patient discharge
        </li>
        <li className="mb-2">
          Integrated with city-wide health management system
        </li>
      </ul>
    </div>
  );
}

export default BedAvailability;
