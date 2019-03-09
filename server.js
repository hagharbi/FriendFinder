// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");
var webpack = require("webpack");

// EXPRESS CONFIGURATION
var app = express();
var PORT = process.env.PORT || 8080;

// EXPRESS APP SETUP
// Sets up the Express App to handle data parsing
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// ROUTER
// These routes direct our server to a series of route files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// LISTENER
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
