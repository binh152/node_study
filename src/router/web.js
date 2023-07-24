import express from "express";
import {
  getHomePage,
  getDetailPage,
  createUser,
} from "../controller/homeController";

let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", getHomePage);

  router.get("/detail/:id", getDetailPage);
  router.post("/create-user", createUser);

  return app.use("/", router);
};

module.exports = initWebRoute;
