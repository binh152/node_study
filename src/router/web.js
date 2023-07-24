import express from "express";
import { getHomePage, getDetailPage } from "../controller/homeController";

let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", getHomePage);

  router.get("/detail/:id", getDetailPage);

  return app.use("/", router);
};

module.exports = initWebRoute;
