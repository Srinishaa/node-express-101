
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
const password=process.env.password;
mongoose.connect("mongodb://localhost:27017/demoDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const { User, Subject } = require('./models/user');

app.get("/", function(req, res){
    res.render("home")
})
app.get("/dashboard", function(req, res){
  res.render("dash")
})
app.get("/profile", function(req, res){
  res.render("profile")
})
app.get("/donations", function(req, res){
  res.render("bla-bla")
})

app.post("/test", function(req,res){
  const user = new User({
    name: req.body.name,
    color: req.body.color,
    fruit: req.body.fruit,
})
user.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    res.redirect("/")
  }
});
})

app.get("/test/:id", function(req,res){
  console.log(req.params.id)
  User.findById({
    _id: req.params.id
    },function(err, result) {
    if (!err) {
        const data = result;
        res.render("test", {
          data: data
        });
      }
    else{
        console.log(err)
    }
})
})

app.post("/delete",function(req,res){
  User.deleteOne({_id:req.body.id},function(err){
    if(!err){
      res.redirect("/")
    }
  })
  })

app.listen(3000, function() {
  console.log("Server started on port 3000");
});

// "mongodb+srv://admin_nisha:+"password"+@cluster0.waeg9.mongodb.net/todolistDB"
// "mongodb://localhost:27017/todolistDB"