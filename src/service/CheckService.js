import { Op } from "sequelize";

const db = require("../models");

const check_game_customer = async (data) => {
  try {
    let res = await db.game.findOne({
      where: {
        [Op.and]: [{ id: data.id }, { id_Khachhang: data.id_Khachhang }],
      },
      raw: true,
    });
    if(res){
        return {
            EC: 1
        }
    }
  } catch (error) {
    console.log(error);
    return {
      EC: -1,
    };
  }
};

export default { check_game_customer };
