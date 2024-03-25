import express from "express";
const router = express.Router();
require("dotenv").config();
import uploadfileController from "../controllers/uploadfileController";
import imageController from "../controllers/imageController";
import phanquaController from "../controllers/phanquaController";
import gameController from "../controllers/gameController";
import baocaoController from "../controllers/baocaoController";

const initApiRouter = (app) => {
  router.get("/", (req, res) => {
    res.send("helloooooo");
  });

  // upload
  router.post(
    "/upload-vongquay",
    uploadfileController.postFileUploadImage_vongquay
  );
  router.post(
    "/upload-banner",
    uploadfileController.postFileUploadImage_banner
  );
  router.post(
    "/upload-anhnen",
    uploadfileController.postFileUploadImage_anhnen
  );
  router.post(
    "/upload-footer",
    uploadfileController.postFileUploadImage_footer
  );

  // ảnh
  router.put("/image/:id_game", imageController.putInfoImage);
  router.get("/image/:id_game", imageController.getInfoImage);
  router.post("/image", imageController.post_image);

  //phan qua
  router.put("/phan-qua/:id_qua", phanquaController.put_phanqua);
  router.post("/phan-qua", phanquaController.post_phanqua);
  router.delete("/phan-qua/:id", phanquaController.delete_phanqua);
  router.get("/phan-qua/:id_game", phanquaController.get_all_phanqua);
  //game
  router.post("/game", gameController.post_game);
  router.put("/game/:id_game", gameController.put_game);

  //bao cao
  router.post("/bao-cao", baocaoController.post_info_gamer);
  router.get("/bao-cao/:id_game", baocaoController.get_all_baocao);
  router.delete("/bao-cao/:id", baocaoController.delete_baocao_byid)
  router.put("/bao-cao/:id", baocaoController.update_active_lienhe)


  return app.use("/api/v1", router);
};

export default initApiRouter;
