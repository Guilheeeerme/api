const express = require("express");
const UsersController = require("../controllers/users");
const User = require("../models/user");

const usersController = new UsersController(User);
const router = express.Router();

router.get("/", (req, res) => usersController.get(req, res));
router.get("/:id", (req, res) => usersController.getById(req, res));
router.post("/", (req, res) => usersController.create(req, res));
router.put("/:id", (req, res) => usersController.update(req, res));
router.delete("/:id", (req, res) => usersController.remove(req, res));

module.exports = router;
