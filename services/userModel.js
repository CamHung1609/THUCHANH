import pool from "./../configs/connectDB";
const getAllUser = async () => {
  const [rows, field] = await pool.execute("SELECT * FROM `users`");
  return rows;
};
const getUser = async (username) => {
  const [row, field] = await pool.execute(
    "SELECT * FROM `users` WHERE `username` =?",
    [username]
  );
  return row;
};

//api

const addUserModel = async (data) => {
  const [row, field] = await pool.execute(
    "INSERT INTO `users` VALUES (?,?,?,?,?,?,?)",
    [
      data.username,
      data.hashPW,
      data.fullname,
      data.address,
      data.sex,
      data.email,
      1,
    ]
  );
  return row;
};

const updateUserModel = async (data) => {
  const [row, field] = await pool.execute(
    "UPDATE `users` SET `fullname` = ?,`address` = ?,`sex` = ?,`email` = ? WHERE `username` = ?",
    [data.fullname, data.address, data.sex, data.email, data.usernameEdit]
  );
  return row;
};

const removeUserModel = async (username) => {
  const [row, field] = await pool.execute(
    "DELETE FROM `users` WHERE `username`=?",
    [username]
  );
  return row;
};

export default {
  getAllUser,
  getUser,
  addUserModel,
  removeUserModel,
  updateUserModel,
};
