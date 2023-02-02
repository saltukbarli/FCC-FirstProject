// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});
app.get("/api/:paramaterEntrance?", function(req, res) {
  const paramaterEntrance = req.params.paramaterEntrance;
  let resDate;


  if (!paramaterEntrance) {
    resDate = new Date();
  } else {
    resDate = !isNaN(paramaterEntrance) ? new Date(parseInt(paramaterEntrance)) : new Date(paramaterEntrance);
  }

  if (resDate.toString() === "Invalid Date") {
    res.json({ error: resDate.toString() });
  } else {
    res.json({ unix: resDate.getTime(), utc: resDate.toUTCString() });
  }

});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
