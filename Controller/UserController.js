import userModel from "../services/userModel";

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

// api user

const addUser = async (req, res) => {
  const data = req.body;
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

export {
  getUserPage,
  getViewPage,
  getAddUserPage,
  getUpdateUserPage,
  addUser,
  updateUser,
  removeUser,
};
