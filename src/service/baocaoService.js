const db = require("../models");
const post_info_gamer = async (data) => {
  try {
    let c = await db.bao_cao.create({
      name: data.name,
      phone: data.phone,
      qua: data.qua,
      id_game: data.id_game,
    });

    c = c.get({ plain: true });
    return c;
  } catch (error) {
    console.log(error);
  }
};

const get_all_baocao = async (id) => {
  try {
    let g = await db.bao_cao.findAll({
      where: { id_game: id },
      order: [["createdAt", "asc"]],
      raw: true,
    });
    return g;
  } catch (error) {
    console.log(error);
  }
};

const delete_baocao_byid = async (id) => {
  try {
    let del = await db.bao_cao.destroy({
      where: { id: id },
    });
    if (del) return { DT: "Delete success" };
  } catch (error) {
    console.log(error);
  }
};

const update_active_lienhe = async (id, active) => {
  try {
    const u = await db.bao_cao.update(
      {
        active: active.a,
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

export default {
  post_info_gamer,
  get_all_baocao,
  delete_baocao_byid,
  update_active_lienhe,
};
