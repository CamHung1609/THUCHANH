import pool from "./../configs/connectDB";
const getAllSanPham = async () => {
  const [row] = await pool.execute("SELECT * FROM `sanpham`");
  return row;
};
const getProByIdCate = async (id) => {
  const [row] = await pool.execute(
    "SELECT * FROM `sanpham` WHERE `idnhom` = ?",
    [id]
  );
  return row;
};
export default {
  getAllSanPham,
  getProByIdCate,
};
