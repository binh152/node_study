import express from "express";
import {
  getHomePage,
  getDetailPage,
  createUser,
  deleteUser,
  getEditUser,
  updateUser,
} from "../controller/homeController";

let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", getHomePage);

  router.get("/detail/:id", getDetailPage);
  router.post("/create-user", createUser);
  router.post("/delete-user", deleteUser);
  router.get("/edit-user/:id", getEditUser);
  router.post("/update-user", updateUser);

  return app.use("/", router);
};

module.exports = initWebRoute;
