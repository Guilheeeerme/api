const express = require("express");
const ProductsController = require("../controllers/products");

const router = express.Router();

router.get("/", (req, res) => ProductsController.get(req, res));

module.exports = router;
