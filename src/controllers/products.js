class ProductsController {
  constructor(product) {
    this.Product = product;
  }

  async get(req, res) {
    try {
      const products = await this.Product.find({});
      res.send(products);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
}

module.exports = ProductsController;
