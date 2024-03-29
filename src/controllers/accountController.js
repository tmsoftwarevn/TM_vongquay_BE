import accountService from "../service/accountService";

const put_password = async (req, res) => {
  try {
    let data = await accountService.put_password(req.body);
    if (data && data.DT) {
      return res.status(200).json({
        EC: 1,
        message: "Update password success",
      });
    }
    return res.status(400).json({
        EC: -1,
        message: "Có lỗi"
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Err code",
      EC: -1,
    });
  }
};

const check_password = async (req, res, next) => {
  try {
    let check = await accountService.check_password(req.body);
    if (check && check.EC === 1) {
      return res.status(200).json({
        EC: 1,
        message:"confirm email and password"
      })
    }
    return res.status(400).json({
      EC: -1,
      message: "Tài khoản or mật khẩu không chính xác",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EC: -1,
      message: "Err code",
    });
  }
};
export default { put_password, check_password };
