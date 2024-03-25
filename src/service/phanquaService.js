
const db = require("../models");

const put_phanqua = async (data, id) => {
  try {
    const u = await db.phan_qua.update(
      {
        name: data.name,
        tile: data.tile,
        stt: data.stt,
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

const post_phanqua = async (data) => {
  try {
    let c = await db.phan_qua.create({
      name: data.name,
      tile: data.tile,
      id_game: data.id_game,
      stt: data.stt,
    });

    c = c.get({ plain: true });
    return c;
  } catch (error) {
    console.log(error);
  }
};

//xoa, list
const delete_phanqua = async (id) => {
  try {
    let del = await db.phan_qua.destroy({
      where: { id: id },
    });
    if (del) return { DT: "Delete success" };
  } catch (error) {
    console.log(error);
  }
};

const get_all_phanqua = async (id) =>{
  try {
    let g = await db.phan_qua.findAll({
      where: { id_game: id },
      order: [["stt", "asc"]],
      raw: true,
    });
    return g;
  } catch (error) {
    console.log(error);
  }
}
export default { put_phanqua, post_phanqua, delete_phanqua , get_all_phanqua};
