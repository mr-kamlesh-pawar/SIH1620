import React from 'react';

const HospitalList = ({ hospitals, onHospitalClick }) => {
  return (
    <ul className="hospital-list">
      {hospitals.map((hospital, index) => (
        <li key={index} onClick={() => onHospitalClick(hospital)}>
          {hospital.name}
        </li>
      ))}
    </ul>
  );
};

export default HospitalList;
