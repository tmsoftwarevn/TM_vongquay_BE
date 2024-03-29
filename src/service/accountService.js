const db = require("../models");
const salt = bcrypt.genSaltSync(10);
import bcrypt from "bcryptjs";

const hashUserPassword = (userPassword) => {
  let hash = bcrypt.hashSync(userPassword, salt);
  return hash;
};

const put_password = async (data) => {
  try {
    let hashPassword = hashUserPassword(data.password);
    let u = await db.khach_hang.update(
      {
        password: hashPassword,
      },
      {
        where: { email: data.email },
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

const check_password = async (data) => {
  try {
    let user = await db.khach_hang.findOne({
      where: {
        email: data.email,
      },
    });

    if (user) {
      let userData = user.get({ plain: true });
      let isPassword = bcrypt.compareSync(data.password, userData.password);
      if (isPassword) {
        return {
          EC: 1,
        };
      }
    }
    return {
      EC: -1,
    };
  } catch (error) {
    console.log("error", error);
    return {
      EC: -1,
    };
  }
};

export default { put_password, check_password };
