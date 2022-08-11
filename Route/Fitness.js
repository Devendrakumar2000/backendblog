const express =require("express");
const FitnessController =require("../Component/Fitness");


const FitnessRouter =express.Router();
FitnessRouter.route("/Fitness").get(FitnessController.apiController);

module.exports = FitnessRouter;