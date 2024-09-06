import React from "react";
import DoctorCard from "./DoctorCard";

const doctors = [
  {
    name: "Dr. Sarah Johnson",
    specialization: "Cardiologist",
    available: true,
  },
  {
    name: "Dr. Michael Lee",
    specialization: "Orthopedic Surgeon",
    available: false,
  },
  // Add more doctor objects as needed
];

const DoctorsPage = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Our Doctors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <DoctorCard
              key={index}
              name={doctor.name}
              specialization={doctor.specialization}
              available={doctor.available}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorsPage;
