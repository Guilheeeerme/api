const express = require("express");
const routes = require("./routes/index");
const db = require("../src/config/database");

(async () => {
  try {
    await db.mongoose.connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database");
  } catch (error) {
    console.log("Database connection error" + error);
    process.exit(1);
  }
})();

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", routes);

module.exports = app;
