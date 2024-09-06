const express = require("express");
const connectDB = require("../backend/config/database.js");

const cors = require("cors");
require("dotenv").config();

const hospitalRoutes = require("./routes/hospitalRoutes");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();
// Hospital routes
app.use("/api/hospitals", hospitalRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
