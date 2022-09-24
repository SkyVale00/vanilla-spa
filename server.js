const express = require("express");
const path = require("path");

const app = express();

// middleware - whenever the path has '/static' this will serve the static directory
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

// No matter what path is sent to the web server, this will send it back to the index.html
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

// open on localhost:5000
app.listen(process.env.PORT || 5000, () => console.log("Server running on Port 5000..."));