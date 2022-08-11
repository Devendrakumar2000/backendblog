const express =require("express");
const KollywoodController =require("../Component/Kollywood");


const KollywoodRouter =express.Router();
KollywoodRouter.route("/Kollywood").get(KollywoodController.apiController);

module.exports = KollywoodRouter;