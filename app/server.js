const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
        <h1>Docker-Based Application Deployment</h1>
        <p>Application is running successfully.</p>
        <p>Node.js + Express + Docker</p>
    `);
});

app.get("/health", (req, res) => {
    res.json({
        status: "healthy",
        message: "Application is running"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});