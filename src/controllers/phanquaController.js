import phanquaService from "../service/phanquaService";

const put_phanqua = async (req, res) => {
  try {
    let data = await phanquaService.put_phanqua(req.body, req.params.id_qua);
    if (data) {
      return res.status(201).json({
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

const post_phanqua = async (req, res) => {
  const data = await phanquaService.post_phanqua(req.body);
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

const delete_phanqua = async (req, res) => {
  try {
    let data = await phanquaService.delete_phanqua(req.params.id);
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

 const get_all_phanqua = async(req, res) =>{
  try {
    let data = await phanquaService.get_all_phanqua(req.params.id_game);
    if (data) {
      return res.status(200).json({
        data: data,
        EC: 1,
      });
    } else {
      return res.status(400).json({
        message: "Có lỗi",
        EC: -1,
      });
    }
  } catch (error) {
    return res.status(500).json({
      EC: -1,
      message: "Wrong something",
    });
  }
}
export default { put_phanqua, post_phanqua, delete_phanqua, get_all_phanqua };
