import imageService from "../service/imageService";

const putInfoImage = async (req, res) => {
  try {
    let data = await imageService.putInfoImage(req.body, req.params.id_game);
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
      message: "Wrong somthing",
      EC: -1,
    });
  }
};

const getInfoImage = async (req, res) => {
  try {
    let data = await imageService.getInfoImage(req.params.id_game);
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
};

const post_image = async (req, res) => {
  const data = await imageService.post_image(req.body);
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



export default { putInfoImage, getInfoImage, post_image };
