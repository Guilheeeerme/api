const express = require("express");
const ProductsController = require("../controllers/products");

const router = express.Router();

const productsController = new ProductsController(); // Precisa criar a instancia
router.get("/", (req, res) => productsController.get(req, res)); // Para usar aqui

module.exports = router;
