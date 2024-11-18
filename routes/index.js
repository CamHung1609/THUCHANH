import jwt from "jsonwebtoken";

import { getHomePage } from "../Controller/HomeController";
import { getAboutPage } from "../Controller/AboutController";
import { getContactPage } from "../Controller/ContactController";
import {
  getUserPage,
  getViewPage,
  getAddUserPage,
  getLoginPage,
  addUser,
  getUpdateUserPage,
  updateUser,
  removeUser,
  logout,
} from "../Controller/UserController";
import {
  getNhom,
  getProByIdCate,
  addNhom,
  getSanPham,
  login,
  getInfoUserJWT,
} from "../Controller/ApiController";

import auth from "../middlewares/auth";

const initWebRoute = (app) => {
  app.use(auth.globalVariables);
  app.get("/", getHomePage);

  //login
  app.get("/login", getLoginPage);
  app.get("/logout", logout);
  // get page
  app.get("/about", getAboutPage);
  app.get("/contact", getContactPage);
  app.get("/user", getUserPage);

  app.get("/user/view/:username", auth.isMineOrAdmin, getViewPage);
  app.get("/user/AddUser", getAddUserPage);
  app.get("/user/update/:username", auth.isMineOrAdmin, getUpdateUserPage);

  //api
  app.post("/api/addUser", addUser);
  app.post("/api/updateUser", auth.isMineOrAdmin, updateUser);
  app.post("/api/removeUser", removeUser);

  // api buoi 2

  app.post("/api/login", login);
  app.post("/api/logout", logout);

  app.get("/api/getNhom", getNhom);
  app.post("/api/addNhom", addNhom);
  app.get("/api/getSanPham", getSanPham);
  app.get("/api/getSanPham/:idCategory", getProByIdCate);
  app.get("/api/getInfoUserJWT", auth.verifyToken, getInfoUserJWT);
};
export default initWebRoute;
