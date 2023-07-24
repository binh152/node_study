import express from "express";
import configViewengine from "./config/viewengine";
import initWebRoute from "./router/web";
// import connection from "./config/connectDB";

require("dotenv").config();
const app = express();

app.use("/static", express.static("public"));
const port = process.env.PORT || 8080;

configViewengine(app);

initWebRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
