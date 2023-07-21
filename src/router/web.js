import express from "express";
import { getHomePage } from "../controller/homeController";

let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", getHomePage);

  router.get("/about", (req, res) => {
    res.send("chao nhe");
  });

  return app.use("/", router);
};

module.exports = initWebRoute;
