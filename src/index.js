import express from "express";
import configViewengine from "./config/viewengine";
import initWebRoute from "./router/web";
import bodyParser from "body-parser";
import initApỉRoute from "./router/api";

require("dotenv").config();
const app = express();
app.use("/static", express.static("public"));
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

configViewengine(app);

initWebRoute(app);

// api
initApỉRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port localhost:${port}`);
});
