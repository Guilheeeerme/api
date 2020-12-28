const express = require("express");
const ProductsController = require("../controllers/products");
const Product = require("../models/product");

const productsController = new ProductsController(Product);
const router = express.Router();

router.get("/", (req, res) => productsController.get(req, res));

module.exports = router;
