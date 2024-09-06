const axios = require("axios");
const Hospital = require("../models/hospital");

// Fetch hospitals in India/Maharashtra from OSM and save to MongoDB
const fetchHospitals = async (req, res) => {
  try {
    const { latitude, longitude } = req.body;

    // Modify the query to focus on hospitals in Maharashtra, India
    const response = await axios.get(
      `https://nominatim.openstreetmap.org/search.php?q=hospital+maharashtra+india&format=json&limit=10&lat=${latitude}&lon=${longitude}&radius=10000`
    );

    const hospitals = response.data.map((hospital) => ({
      name: hospital.display_name,
      address: hospital.display_name,
      contact: "123-456-7890", // Mock contact, can be updated
      emergencyContact: "987-654-3210", // Mock emergency contact
      lat: hospital.lat,
      lon: hospital.lon,
    }));

    // Save hospitals to DB (optional, can skip this step)
    await Hospital.insertMany(hospitals);

    res.json(hospitals);
  } catch (error) {
    console.error("Error fetching hospitals:", error.message);
    res.status(500).json({ error: "Failed to fetch hospitals" });
  }
};

const getHospitalDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const hospital = await Hospital.findById(id);
    res.json(hospital);
  } catch (error) {
    console.error("Error fetching hospital details:", error.message);
    res.status(500).json({ error: "Failed to fetch hospital details" });
  }
};

module.exports = {
  fetchHospitals,
  getHospitalDetails,
};
