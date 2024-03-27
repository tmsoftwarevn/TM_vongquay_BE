import CheckService from "../service/CheckService";

const check_game_customer = async (req, res, next) => {
  try {
    let data = await CheckService.check_game_customer(req.body);
    if (data && data.EC === 1) {
        return res.status(200).json({
          data: "confirm",
          EC: 1,
        });
      //return next();
    } else {
      return res.status(400).json({
        EC: -1,
        message: "Not correct",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EC: -1,
      message: "Err server",
    });
  }
};

export default { check_game_customer };
