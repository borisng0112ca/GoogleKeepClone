const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
twitterId: {
  type: String,
  required: true
},
screenName: {
  type: String,
  required: true
},
name:{
  type: String,
  required: true
},
profileImage:{
  type: String,
  required: false
},
createdAt: {
  type: Date,
  default: Date.now
}
});

userSchema.plugin(require('mongoose-findorcreate'));

const User = mongoose.model("User", userSchema);
module.exports = User;
