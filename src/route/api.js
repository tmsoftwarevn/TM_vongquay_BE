import express from "express";
const router = express.Router();
require("dotenv").config();
import uploadfileController from "../controllers/uploadfileController";

const initApiRouter = (app) => {
  router.get("/", (req, res) => {
    res.send("helloooooo");
  });

  router.post("/upload-vongquay", uploadfileController.postFileUploadImage_vongquay);
  router.post("/upload-banner", uploadfileController.postFileUploadImage_banner);
  router.post("/upload-anhnen", uploadfileController.postFileUploadImage_anhnen);
  router.post("/upload-footer", uploadfileController.postFileUploadImage_footer)

  return app.use("/api/v1", router);
};

export default initApiRouter;
