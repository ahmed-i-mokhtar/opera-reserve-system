const functions = require('firebase-functions');
const bodyParser = require("body-parser");
const express = require("express");
const database = require("./db");


const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original\
app.post("/addMessage", async (req, res) => {
    try {
      console.log(JSON.stringify(req.body), "addMessage route");
      res.status(200).send(req.body.fname);
    } catch (err) {
      res.send(err.message);
    }
  });

app.post("/registerUser", async (req, res) => {
    try {
        var users = database.getCollection('users');
        

    } catch(err) {
        res.send(err.message);
    }
});




  exports.app= functions.https.onRequest(app);