import express from "express";
const router = express.Router();
require("dotenv").config();
import uploadfileController from "../controllers/uploadfileController";
import imageController from "../controllers/imageController";
import phanquaController from "../controllers/phanquaController";
import gameController from "../controllers/gameController";
import baocaoController from "../controllers/baocaoController";
import khachhangController from "../controllers/khachhangController";
import CheckController from "../controllers/CheckController";
import accountController from "../controllers/accountController";

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

  // image
  router.put("/image/:id_game", imageController.putInfoImage);
  router.get("/image/:id_game", imageController.getInfoImage);
  router.post("/image", imageController.post_image);

  //phan qua
  router.put("/phan-qua/:id_qua", phanquaController.put_phanqua);
  router.post("/phan-qua", phanquaController.post_phanqua);
  router.delete("/phan-qua/:id", phanquaController.delete_phanqua);
  router.get("/phan-qua/:id_game", phanquaController.get_all_phanqua);

  //game
  // check_game để xem game tồn tại chưa
  router.post("/game", gameController.check_game, gameController.post_game);
  router.put("/game/:id_game", gameController.put_game);
  router.get("/game/:id", gameController.get_info_game);

  //bao cao
  router.post("/bao-cao", baocaoController.post_info_gamer);
  router.get("/bao-cao/:id_game", baocaoController.get_all_baocao);
  router.delete("/bao-cao/:id", baocaoController.delete_baocao_byid);
  router.put("/bao-cao/:id", baocaoController.update_active_lienhe);

  //khach hang

  router.post(
    "/customer",
    khachhangController.check_email_exist,
    khachhangController.post_customer
  );

  router.put("/customer/:id", khachhangController.put_customer);
  router.delete("/customer/:id", khachhangController.delete_customer);
  router.get("/customer", khachhangController.get_all_customer);

  router.post("/customer-login", khachhangController.postLogin);
  router.get("/info-customer/:id", khachhangController.get_info_customer);

  // check game - customer (id, id_khachhang có giống k)
  router.post("/check-game-customer", CheckController.check_game_customer)

  // check-pass và update pass
  router.post("/check-password", accountController.check_password);
  router.post("/update-password", accountController.put_password);



  return app.use("/api/v1", router);
};

export default initApiRouter;
