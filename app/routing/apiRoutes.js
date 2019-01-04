var friends = require('../data/friends.js');

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {
        var userInput = req.body;

        var userAnsers = userInput.scores;

        var name = '';
        var photo = '';
        var currentDif = 0;
        for (var i = 0; i < friends.length; i++) {
            var diff = 0;

            for (var j = 0; j < userAnsers.length; j++) {
                diff += Math.abs(friends[i].scores[j] - userAnsers[j]);
            }

            if (diff <= currentDif) {
                totalDifference = diff;
                name = friends[i].name;
                photo = friends[i].photo;
            }
        }

        friends.push(userInput);

        res.json({ status: 'OK', name: name, photo: photo });
    });
};