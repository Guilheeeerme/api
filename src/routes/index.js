const express = require("express");
const router = express.Router();

const productsRoute = require("./products");
const usersRoute = require("./products");

router.get("/", (req, res) => res.send("Hello World!"));
router.use("/products", productsRoute);
router.use("/users", usersRoute);

module.exports = router;
