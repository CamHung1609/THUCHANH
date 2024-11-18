import sanphamModel from "../services/sanphamModel";
import nhomModel from "../services/nhomModel";
import userModel from "../services/userModel";
import { compareSync } from "bcrypt";
import jwt from "jsonwebtoken";
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

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await userModel.getUserByUsername(username);
  console.log({ username, password });
  if (user.length === 0) {
    return res.status(200).json({
      error: true,
      message: "Thông tin đăng nhập không đúng",
    });
  }
  if (!compareSync(password, user[0].password)) {
    return res.status(200).json({
      error: true,
      message: "Thông tin đăng nhập không đúng",
    });
  }
  const infoUser = {
    username: user[0].username,
    role: user[0].role,
    fullname: user[0].fullname,
    email: user[0].email,
    address: user[0].address,
    sex: user[0].sex,
  };
  const accessToken = jwt.sign(infoUser, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1h",
  });

  return res.status(200).json({
    error: false,
    message: "Đăng nhập thành công",
    accessToken,
    user: infoUser,
  });
};
const getInfoUserJWT = async (req, res) => {
  const { user } = req;
  return res.status(200).json({
    error: false,
    message: "Lấy thông tin người dùng thành công",
    user,
  });
};
const logout = (req, res) => {
  req.session.destroy();
  return res.status(200).json({
    error: false,
    message: "Đăng xuất thành công",
  });
};

export {
  getInfoUserJWT,
  // nhom
  getNhom,
  addNhom,
  // san pham
  getSanPham,
  getProByIdCate,
  // quan ly
  login,
  logout,
};
