import pool from "./../configs/connectDB";
const getAllNhom = async () => {
  const [row] = await pool.execute("SELECT * FROM `nhom`");
  return row;
};

const addNhom = async (name) => {
  const [row, fields] = await pool.execute(
    "INSERT INTO `nhom`(`ten`) VALUES (?)",
    [name]
  );
  return row;
};
export default {
  getAllNhom,
  addNhom,
};
