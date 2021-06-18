const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    color: String,
    fruit:String
  });
  const subjectSchema = new mongoose.Schema({
    subject:String,
    score:Number
  });

  const User = mongoose.model("user", userSchema);
  const Subject = mongoose.model("subjects", subjectSchema);

  module.exports = {
    User:User,
    Subject:Subject
  };