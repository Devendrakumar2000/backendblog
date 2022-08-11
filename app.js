const express = require("express");
const app = express();
const cors = require("cors");
const FitnessRouter = require("./Route/Fitness");
const FoodRouter = require("./Route/Food");
const HollywoodRouter = require("./Route/Holllywood");
const KollywoodRouter = require("./Route/Kollywood");
const TechnologyRouter = require("./Route/Technology");

app.use(cors());
app.use("/api",FitnessRouter);
app.use("/api",FoodRouter);
app.use("/api",HollywoodRouter);
app.use("/api",KollywoodRouter);
app.use("/api",TechnologyRouter);

app.listen(process.env.PORT || 8000,()=>{
    console.log("app is running");
})