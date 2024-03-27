import imageService from "./imageService";

const db = require("../models");

const post_game = async (data) => {
  // tạo luôn game, tạo luôn image theo id_game
  try {
    let c = await db.game.create({
      name: data.name,
      slug: data.slug,
      so_manh: data.so_manh,
      id_Khachhang: data.id_Khachhang,
    });

    c = c.get({ plain: true });

    let create_image = await db.image.create({
      nut_quay: "",
      mui_ten: "",
      vong_quay: "",
      banner: "",
      anh_nen: "",
      footer: "",
      id_game: c.id
    })

    return c;
  } catch (error) {
    console.log(error);
  }
};

// check khach hang đã tạo game chưa
const check_game = async (data)=>{
  try {
    // check khachhang co game chưa (moi chi 1 game)
    let res = await db.game.findOne({
      where: {id_Khachhang: data.id_Khachhang}
    })
    if(res){
      return {
        DT: res
      }
    }
  } catch (error) {
    console.log(error)
  }
}

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

const get_info_game = async (id)=>{
  try {
    let g = await db.game.findOne({
      where: { id: id },
      raw: true,
    });
    return g;
  } catch (error) {
    console.log(error);
  }
}

export default { post_game, put_game , check_game, get_info_game};
