const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let tables=[];
let waitList=[];


app.get("/", function(req, res) {

    res.sendFile(path.join(__dirname, "index.html"));
  });

app.get("/tables", function(req, res) {

    res.sendFile(path.join(__dirname, "tables.html"));
  });

app.get("/reserve", function(req, res) {

    res.sendFile(path.join(__dirname, "reserve.html"));
  });

app.get("/api/tables",function(req,res){
    res.json(tables);
  })

app.get("/api/waitlist",function(req,res){
    res.json(waitList);
})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });