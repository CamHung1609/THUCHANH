import pool from "./../configs/connectDB";
const getAllNhom = async () => {
  const [row] = await pool.execute("SELECT * FROM `nhom`");
  return row;
};
export default {
  getAllNhom,
};
