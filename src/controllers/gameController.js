import gameService from "../service/gameService";

const post_game = async (req, res) => {
  const data = await gameService.post_game(req.body);
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

const put_game = async (req, res) => {
  try {
    let data = await gameService.put_game(req.body, req.params.id_game);
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
      message: "Wrong somthing",
      EC: -1,
    });
  }
};

const check_game = async (req, res, next) => {
  try {
    let check = await gameService.check_game(req.body);
    if (check && check.DT) {
      return res.status(200).json({
        EC: -2,
        message: "Game đã được tạo",
        data: check.DT,
      });
    } else {
      return next();
    }
  } catch (error) {
    console.log(err);
    return res.status(500).json({
      EC: -1,
      message: "Err somethings",
    });
  }
};

const get_info_game = async (req, res) => {
  try {
    let data = await gameService.get_info_game(req.params.id);
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

export default { post_game, put_game, check_game, get_info_game };
