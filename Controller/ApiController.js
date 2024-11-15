import sanphamModel from "../services/sanphamModel";
import nhomModel from "../services/nhomModel";

// Nhom
const getNhom = async (req, res) => {
  const data = await nhomModel.getAllNhom();
  return res.status(200).json({
    nhom: data,
    message: "thanh cong",
  });
};

const addNhom = async (req, res) => {
  const { name } = req.body;
  await nhomModel.addNhom(name);
  return res.status(200).json({
    error: false,
    message: "Thêm nhóm thành công",
  });
};

// San Pham
const getSanPham = async (req, res) => {
  const data = await sanphamModel.getAllSanPham();
  return res.status(200).json({
    sanpham: data,
    message: "thanh cong",
  });
};

const getProByIdCate = async (req, res) => {
  const data = await sanphamModel.getProByIdCate(req.params.idCategory);
  return res.status(200).json({
    sanpham: data,
    message: "thanh cong",
  });
};

export {
  // Nhom
  getNhom,
  // api
  addNhom,
  // San Pham
  getSanPham,
  getProByIdCate,

  //api
};
