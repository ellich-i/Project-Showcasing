// Load Express (our web framework)
const express = require("express");

// Create the app (think of it as opening a restaurant)
const app = express();

// Port = the door number where the server listens
const PORT = process.env.PORT || 5000;

// Let the server read JSON sent in requests
app.use(express.json());

// Test route: used to check if the server is alive
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "BSIT Showcase API is running" });
});

// Start the server and wait for requests
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});