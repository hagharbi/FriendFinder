// Load Data

var friendsList = require("../data/friends");

// Routing
module.exports = function(app) {
    // API GET Request (Data pushed by server to user)
    app.get("/api/friends", function(req,res) {
        res.json(friendsList);
    });

    // API POST Request (Data pushed by user to server)
    app.post("/api/friends", function(req,res) {
         // Create new friend profile

        var friendMatch = {
            name: "",
            photo: "",
            difference: 10000
            }; 
            
        var newFriend = req.body;
        var newFriendScore = newFriend.preferences;
        var totalDiff = 0;

        // Calculating totals 
        for (var i = 0; i < friendsList.length; i++) {
            var currentFriend = friendsList[i];
            totalDiff = 0;

            console.log(currentFriend.name)

            for (var j = 0; j < currentFriend.preferences.length; j++) {
                var currentFriendScore = currentFriend.preferences[j];
                var currentUserScore = newFriendScore[j];

                totalDiff += Math.abs(currentUserScore - currentFriendScore);
                // totalDiff += Math.abs(friendsList[i].preferences[j] - newFriend.preferences[j]);

                if (totalDiff <= friendMatch.difference) {
                    friendMatch.name = friendsList[i].name,
                    friendMatch.photo = friendsList[i].photo,
                    friendMatch.difference = totalDiff
                }
            }
        }
            
        friendsList.push(newFriend);
        res.json(friendMatch);
        console.log(friendMatch);
    });
}