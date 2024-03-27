const db = require("../models");

const putInfoImage = async (data, id) => {
  try {
    const u = await db.image.update(
      {
        nut_quay: data.nut_quay,
        mui_ten: data.mui_ten,
        vong_quay: data.vong_quay,
        banner: data.banner,
        anh_nen: data.anh_nen,
        footer: data.footer,
      },
      {
        where: { id_game: id },   // id_game của mỗi image là duy nhất, ko có bị trùng được
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

const getInfoImage = async (id) => {
  try {
    let g = await db.image.findOne({
      where: { id_game: id },
      raw: true,
    });
    return g;
  } catch (error) {
    console.log(error);
  }
};

const post_image = async (data) => {
  try {
    let c = await db.image.create({
      nut_quay: data.nut_quay,
      mui_ten: data.mui_ten,
      vong_quay: data.vong_quay,
      banner: data.banner,
      anh_nen: data.anh_nen,
      footer: data.footer,
      id_game: data.id_game
    });

    c = c.get({ plain: true });
    return c;
  } catch (error) {
    console.log(error);
  }
};

export default { putInfoImage, getInfoImage, post_image };
