const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

let tables=[];
let waitList=[];


app.get("/", function(req, res) {

    res.sendFile(path.join(__dirname, "./public/index.html"));
  });

app.get("/tables", function(req, res) {

    res.sendFile(path.join(__dirname,"./public/tables.html"));
  });

app.get("/reserve", function(req, res) {

    res.sendFile(path.join(__dirname, "./public/reserve.html"));
  });

app.get("/api/tables",function(req,res){
    res.json(tables);
  });

app.get("/api/waitlist",function(req,res){
    res.json(waitList);
  });

app.post("/reserve",function(req,res){
    var newReservation = req.body;
    if(tables.length <= 4){
        tables.push(newReservation);
        res.json(true);
    }else{
        waitList.push(newReservation);
        res.json(false);
    }
    
  }); 

  app.post("/api/clear", function(req,res){
      tables.empty();
      waitList.empty();
      res.json("Tables Cleared");
  })


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });