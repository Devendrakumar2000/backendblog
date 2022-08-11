const express =require("express");
const FoodController =require("../Component/Food");


const FoodRouter =express.Router();
FoodRouter.route("/Food").get(FoodController.apiController);

module.exports = FoodRouter;