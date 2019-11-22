var path = require('path');
var tableData = require("../data/friends.js");

module.exports = function (app) {
    // API GET Requests
    app.get("/data/friends", function (req, res) {
        res.json(tableData);
        // console.log(tableData);
    });

    app.post("/data/friends", function (req, res) {
        console.log(req.body);
        console.log("*******************")
        // console.log(res);
        // console.log("logging the res of data/friends")
        var newFriend = req.body;
        console.log(newFriend);
        tableData.push(newFriend);
        console.log("************ NEW FREIND LINE 219*******")
        for (var i = 0; i < newFriend.score.length; i++) {
            newFriend.score[i] = parseInt(newFriend.score[i]);
            // console.log(newFriend.score[i]);
        }
    })
    // ---------------------------------------------------------------------------
    // I added this below code so you could clear out the table while working with the functionality.
    // Don"t worry about it!

    // app.post("/api/clear", function(req, res) {
    //   // Empty out the arrays of data
    //   tableData.length = 0;
    //   waitListData.length = 0;

    //   res.json({ ok: true });
    // });
};
