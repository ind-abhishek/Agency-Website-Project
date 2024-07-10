const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "..", "client", "dist")));

// Example API endpoint
app.get("/api/example", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

// Catch-all handler to return the React app for any other route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
