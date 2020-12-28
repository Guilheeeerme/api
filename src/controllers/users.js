class UsersController {
  constructor(user) {
    this.user = user;
  }

  async get(req, res) {
    try {
      const users = await this.user.find({});
      res.send(users);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  async getById(req, res) {
    const { id } = req.params;
    try {
      const user = await this.user.find({ _id: id });
      res.send(user);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  async create(req, res) {
    const user = new this.user(req.body);
    try {
      await user.save();
      res.status(201);
    } catch (error) {
      res.status(422).send(error.message);
    }
  }

  async update(req, res) {
    const body = req.body;
    try {
      const user = await this.user.findById(req.params.id);

      user.name = body.name;
      user.email = body.email;
      user.role = body.role;

      if (body.password) {
        user.password = body.password;
      }

      await user.save();
      res.sendStatus(users);
    } catch (error) {
      res.status(422).send(error.message);
    }
  }

  async remove(req, res) {
    try {
      await this.user.deleteOne({ _id: req.params.id });
      res.sendStatus(204);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
}

module.exports = UsersController;
