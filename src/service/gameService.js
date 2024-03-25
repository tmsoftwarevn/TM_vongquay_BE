const db = require("../models");

const post_game = async (data) => {
  try {
    let c = await db.game.create({
      name: data.name,
      slug: data.slug,
      so_manh: data.so_manh,
      id_Khachhang: data.id_Khachhang,
    });

    c = c.get({ plain: true });
    return c;
  } catch (error) {
    console.log(error);
  }
};

const put_game = async (data, id) => {
  try {
    const u = await db.game.update(
      {
        name: data.name,
        slug: data.slug,
        so_manh: data.so_manh,
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

export default { post_game, put_game };
