import express from "express";
import {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controller/apiController";
let router = express.Router();

const initApỉRoute = (app) => {
  router.get("/users", getAllUser);
  router.post("/create-user", createUser);
  router.put("/update-user", updateUser);
  router.delete("/delete-user/:id", deleteUser);

  return app.use("/api/", router);
};

module.exports = initApỉRoute;
