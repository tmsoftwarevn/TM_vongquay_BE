import express from "express";
const router = express.Router();
require("dotenv").config();
import uploadfileController from "../controllers/uploadfileController";

const initApiRouter = (app) => {
  router.get("/", (req, res) => {
    res.send("helloooooo");
  });

  router.post("/upload", uploadfileController.postFileUploadImage)


  return app.use("/api/v1", router);
};

export default initApiRouter;
