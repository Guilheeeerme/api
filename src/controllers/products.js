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

  async getById(req, res) {
    const { id } = req.params;
    try {
      const products = await this.Product.find({ _id: id });
      res.send(products);
    } catch (error) {
      res.status(500).send(new Error(error.message));
    }
  }

  async create(req, res) {
    const product = new this.Product(req.body);

    try {
      await product.save();
      res.status(201).send(product);
    } catch (error) {
      res.status(422).send(error.message);
    }
  }

  async update(req, res) {
    try {
      await this.Product.updateOne({ _id: req.params.id }, req.body);
      res.sendStatus(200);
    } catch (error) {
      res.status(422).send(error.message);
    }
  }

  async remove(req, res) {
    try {
      await this.Product.deleteOne({ _id: req.params.id });
      res.sendStatus(204);
    } catch (error) {
      res.status(422).send(error.message);
    }
  }
}

module.exports = ProductsController;
