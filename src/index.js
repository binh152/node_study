import express from "express";
import configViewengine from "./config/viewengine";
require("dotenv").config();
const app = express();

app.use("/static", express.static("public"));
const port = process.env.PORT || 8080;

configViewengine(app);
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
