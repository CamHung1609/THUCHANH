import userModel from "../services/userModel";
import { hashSync, compareSync } from "bcrypt";
// var salt = bcrypt.genSaltSync(10);
// var hash = bcrypt.hashSync("B4c0//", salt);

const getUserPage = async (req, res) => {
  let userList = await userModel.getAllUser();
  // console.log(userList);
  res.render("layout/main", {
    data: {
      title: "UserPage",
      page: "user",
      users: userList,
    },
  });
};

const getViewPage = async (req, res) => {
  const { username } = req.params;
  const row = await userModel.getUser(username);
  res.render("layout/main", {
    data: {
      title: "ViewPage",
      page: "viewUser",
      user: row[0],
    },
  });
};

const getAddUserPage = (req, res) => {
  res.render("layout/main", {
    data: {
      title: "AddUserPage",
      page: "addUser",
    },
  });
};

const getUpdateUserPage = async (req, res) => {
  const { username } = req.params;
  const row = await userModel.getUser(username);
  res.render("layout/main", {
    data: {
      title: "UpdateUserPage",
      page: "updateUser",
      user: row[0],
    },
  });
};

const getLoginPage = (req, res) => {
  res.render("layout/main", {
    data: {
      title: "LoginPage",
      page: "login",
    },
  });
};

// api user

const addUser = async (req, res) => {
  const data = req.body;
  const hashPW = hashSync(data.password, 10);
  data.hashPW = hashPW;
  await userModel.addUserModel(data);
  res.redirect("/user");
};

const updateUser = async (req, res) => {
  const data = req.body;
  await userModel.updateUserModel(data);
  res.redirect("/user");
};

const removeUser = async (req, res) => {
  const { username } = req.body;
  await userModel.removeUserModel(username);
  res.redirect("/user");
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const row = await userModel.getUser(username);
  if (row.length == 0) {
    res.redirect("/login");
    return;
  }
  const isCheckPW = compareSync(password, row[0].password);

  if (!isCheckPW) {
    res.redirect("/login");
    return;
  }
};

export {
  // get Page
  getUserPage,
  getViewPage,
  getAddUserPage,
  getUpdateUserPage,
  getLoginPage,

  //api
  addUser,
  updateUser,
  removeUser,
  login,
};
