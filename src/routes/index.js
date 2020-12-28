const express = require("express");
const router = express.Router();

const productsRoute = require("./products");

router.get("/", (req, res) => res.send("Hello World!"));
router.use("/products", productsRoute);

module.exports = router;
