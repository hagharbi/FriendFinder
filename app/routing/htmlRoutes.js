// DEPENDENCIES
var path = require("path");

// ROUTING
module.exports = function(app) {
    // HTML GET Requests
    app.get("/survey", function(req,res) {
        res.sendFile(path.join(__dirname,"/../public/survey.html"));
    });

    // If there is no matching route found then default to home
    app.get("*", function(req,res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });

};