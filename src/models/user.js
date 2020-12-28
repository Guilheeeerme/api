const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
});

schema.set("toJSON", {
  transform: (doc, ret, options) => ({
    _id: ret._id,
    email: ret.email,
    name: ret.name,
    role: ret.role,
  }),
});

const User = mongoose.model("User", schema, "User");

module.exports = User;
