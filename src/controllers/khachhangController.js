import khachhangService from "../service/khachhangService";

const put_customer = async (req, res) => {
  try {
    let data = await khachhangService.put_customer(req.body, req.params.id);
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

const post_customer = async (req, res) => {
  const data = await khachhangService.post_customer(req.body);
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

const delete_customer = async (req, res) => {
  try {
    let data = await khachhangService.delete_customer(req.params.id);
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

const get_all_customer = async (req, res) => {
  try {
    let data = await khachhangService.get_all_customer();
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

// login
const postLogin = async (req, res) => {
  try {
    let data = await khachhangService.loginService(req.body);
    if (data && data.DT) {
      return res.status(200).json({
        data: data.DT,
        EC: 1,
      });
    }
    return res.status(400).json({
      EC: -1,
      message: data.message,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EC: -1,
      message: "Some thing wrong server",
    });
  }
};

const get_info_customer = async (req, res) => {
  try {
    let data = await khachhangService.get_info_customer(req.params.id);
    if (data) {
      return res.status(200).json({
        data: data,
        EC: 1,
      });
    } else {
      return res.status(400).json({
        message: "Email không tồn tại",
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

const check_email_exist = async (req, res, next) => {
  try {
    let r = await khachhangService.check_email_exist(req.body);
    if (r && r.EC === 1) {
      return next();
    } else {
      return res.status(400).json({
        EC: -2,
        message: "Email đã được đăng kí",
      });
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Err something",
    });
  }
};

export default {
  put_customer,
  post_customer,
  delete_customer,
  get_all_customer,
  postLogin,
  get_info_customer,
  check_email_exist,
};
