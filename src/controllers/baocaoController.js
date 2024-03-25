import baocaoService from "../service/baocaoService";

const post_info_gamer = async (req, res) => {
  const data = await baocaoService.post_info_gamer(req.body);
  if (data) {
    return res.status(201).json({
      data: data,
      EC: 1,
    });
  } else {
    return res.status(400).json({
      message: "Không thêm được",
      EC: -1,
    });
  }
};

const get_all_baocao = async (req, res) => {
  const data = await baocaoService.get_all_baocao(req.params.id_game);
  if (data) {
    return res.status(200).json({
      data: data,
      EC: 1,
    });
  } else {
    return res.status(400).json({
      message: "Không thêm được",
      EC: -1,
    });
  }
};

const delete_baocao_byid = async (req, res) => {
  try {
    let data = await baocaoService.delete_baocao_byid(req.params.id);
    if (data && data.DT) {
      return res.status(200).json({
        data: "xóa thành công",
        EC: 1,
      });
    } else {
      return res.status(400).json({
        message: "Không xóa được",
        EC: -1,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Wrong somthing",
      EC: -1,
    });
  }
};

const update_active_lienhe = async (req, res) => {
  try {
    let data = await baocaoService.update_active_lienhe(req.params.id, req.body);
    if (data) {
      return res.status(200).json({
        data: data.DT,
        EC: 1,
      });
    } else {
      return res.status(400).json({
        message: "Không update được",
        EC: -1,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Wrong something",
      EC: -1,
    });
  }
};

export default {
  post_info_gamer,
  get_all_baocao,
  delete_baocao_byid,
  update_active_lienhe,
};
