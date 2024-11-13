import pool from "./../configs/connectDB";
const getAllSanPham = async () => {
  const [row] = await pool.execute("SELECT * FROM `sanpham`");
  return row;
};
export default {
  getAllSanPham,
};
