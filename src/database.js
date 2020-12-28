const mongoose = require("mongoose");

const mongodbUrl =
  process.env.MONGODB_URL || "mongodb://localhost:27017/api-tdd";

const db = {};
db.mongoose = mongoose;
db.url = mongodbUrl;

module.exports = db;
