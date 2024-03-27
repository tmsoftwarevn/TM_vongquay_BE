import bcrypt from "bcryptjs";
const db = require("../models");

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userPassword) => {
  let hash = bcrypt.hashSync(userPassword, salt);
  return hash;
};

const put_customer = async (data, id) => {
  try {
    const u = await db.khach_hang.update(
      {
        name: data.name,
        phone: data.phone,
      },
      {
        where: { id: id },
      }
    );
    if (u[0] > 0)
      return {
        DT: "update success",
      };
  } catch (error) {
    console.log(error);
  }
};

const post_customer = async (data) => {
  try {
    let hashPassword = hashUserPassword(data.password);
    let c = await db.khach_hang.create({
      name: data.name,
      email: data.email,
      phone: data.phone,
      password: hashPassword,
    });

    c = c.get({ plain: true });
    return c;
  } catch (error) {
    console.log(error);
  }
};


//xoa, list
const delete_customer = async (id) => {
  try {
    let del = await db.khach_hang.destroy({
      where: { id: id },
    });
    if (del) return { DT: "Delete success" };
  } catch (error) {
    console.log(error);
  }
};

const get_all_customer = async () => {
  try {
    let g = await db.khach_hang.findAll({
      order: [["createdAt", "asc"]],
      raw: true,
    });
    return g;
  } catch (error) {
    console.log(error);
  }
};

// login ----------
const loginService = async (rawData) => {
  try {
    let user = await db.khach_hang.findOne({
      where: {
        email: rawData.email,
      },
    });

    if (user) {
      let userData = user.get({ plain: true });
      let isPassword = bcrypt.compareSync(rawData.password, userData.password);
      if (isPassword) {
        let d = await get_info_customer(userData.id);
        return {
          DT: d,
        };
      }
    }
    return {
      message: "Email hoặc mật khẩu chưa đúng.Hãy kiểm tra lại",
    };
  } catch (error) {
    console.log("error", error);
    return {
      message: "Something wrong from server",
    };
  }
};

const get_info_customer = async (id) => {
  try {
    let g = await db.khach_hang.findOne({
      attributes: ["name", "email", "phone", "id", "createdAt", "updatedAt"],
      where: { id: id },
      raw: true,
    });

    return g;
  } catch (error) {
    console.log(error);
  }
};

const check_email_exist = async (data) => {
    try {
      let check = await db.khach_hang.findOne({
        where: {email: data.email,}
      });
      if (check) {
        return {
          EC: -1,
        };
      } else {
        return {
          EC: 1,
        };
      }
    } catch (error) {
      console.log(error);
      return {
        EC: -1,
      };
    }
  };
export default {
  put_customer,
  post_customer,
  delete_customer,
  get_all_customer,
  loginService,
  get_info_customer,
  check_email_exist
};
