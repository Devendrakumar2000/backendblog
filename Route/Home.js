const express = require("express");
const HomeController = require("../Component/Home");

const HomeRouter = express.Router();
HomeRouter.route("/Home").get(HomeController.apiController);

module.exports = HomeRouter;