// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on frie-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friendsData");
// var waitListData = require("../data/waitinglistData");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the frien)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // app.get("/api/waitlist", function(req, res) {
  //   res.json(waitListData);
  // });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the friendsData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a friend or not.
    // It will do this by sending out the value "true" have a friend
    // req.body is available since we're using the body-parser middleware
    if (friendsData.length < 5) {
      friendsData.push(req.body);
      res.json(true);
    }
    else {
      waitListData.push(req.body);
      res.json(false);
    }
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the frien while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    friendData.length = [];
    // waitListData.length = [];

    res.json({ ok: true });
  });
};
