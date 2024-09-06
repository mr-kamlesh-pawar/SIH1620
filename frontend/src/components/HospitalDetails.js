import React from 'react';

const HospitalDetails = ({ hospital, goBack }) => {
  return (
    <div className="hospital-details">
      <h2>{hospital.name}</h2>
      <p><strong>Address:</strong> {hospital.address}</p>
      <p><strong>Contact:</strong> {hospital.contact}</p>
      <p><strong>Emergency Contact:</strong> {hospital.emergencyContact}</p>
      <button onClick={goBack}>Back to list</button>
    </div>
  );
};

export default HospitalDetails;
