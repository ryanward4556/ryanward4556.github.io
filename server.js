// Dependencies
// =============================================================
var express = require("express");
var htmlRoutes = require("./routes/htmlRoutes");

// Sets up the Express App
// =============================================================
var app = module.exports = express();
var PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

// Calls htmlRoutes
app.use(htmlRoutes);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on http://localhost:" + PORT);
});
