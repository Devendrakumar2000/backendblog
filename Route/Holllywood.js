const express =require("express");
const HollywoodController =require("../Component/Hollywood");


const HollywoodRouter =express.Router();
HollywoodRouter.route("/Hollywood").get(HollywoodController.apiController);

module.exports = HollywoodRouter;