const path = require("path");

module.exports = function (app) {

    // Index Route
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // About Me Route
    app.get("/aboutme", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/aboutme.html"));
    });

    // Portfolio Route
    app.get("/portfolio", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/portfolio.html"));
    });

    // Portfolio Route
    app.get("/contact", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/contact.html"));
    });

};