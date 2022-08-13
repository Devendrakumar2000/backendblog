const express = require("express");
const app = express();
const cors = require("cors");
const FitnessRouter = require("./Route/Fitness");
const FoodRouter = require("./Route/Food");
const HollywoodRouter = require("./Route/Holllywood");
const KollywoodRouter = require("./Route/Kollywood");
const TechnologyRouter = require("./Route/Technology");
const HomeRouter = require("./Route/Home");

app.use(cors());
app.use("/api",FitnessRouter);
app.use("/api",FoodRouter);
app.use("/api",HollywoodRouter);
app.use("/api",KollywoodRouter);
app.use("/api",TechnologyRouter);
app.use("/api",HomeRouter);

app.listen(process.env.PORT || 8000,()=>{
    console.log("app is running");
})