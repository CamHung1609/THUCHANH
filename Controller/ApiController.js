import sanphamModel from "../services/sanphamModel";
import nhomModel from "../services/nhomModel";

const getNhom = async (req, res) => {
  const data = await nhomModel.getAllNhom();
  return res.status(200).json({
    nhom: data,
    message: "thanh cong",
  });
};

const getSanPham = async (req, res) => {
  const data = await sanphamModel.getAllSanPham();
  return res.status(200).json({
    sanpham: data,
    message: "thanh cong",
  });
};

export { getNhom, getSanPham };
