const express =require("express");
const TechnologyController =require("../Component/Technology");


const TechnologyRouter =express.Router();
TechnologyRouter.route("/Technology").get(TechnologyController.apiController);

module.exports = TechnologyRouter;