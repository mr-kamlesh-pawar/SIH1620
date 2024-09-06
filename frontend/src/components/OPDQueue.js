import React from "react";

function OPDQueue() {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg my-10 mx-auto max-w-4xl">
      <h2 className="text-3xl font-semibold text-blue-900 mb-6">
        OPD Queue Management
      </h2>
      <p className="text-gray-700 mb-4">
        Keep track of patient appointments and manage OPD queues efficiently.
      </p>
      <ul className="list-disc list-inside">
        <li className="mb-2">Real-time appointment scheduling</li>
        <li className="mb-2">Manage waiting times and available slots</li>
        <li className="mb-2">Track doctor availability and room occupancy</li>
      </ul>
    </div>
  );
}

export default OPDQueue;
