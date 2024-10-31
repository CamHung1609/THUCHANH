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
  login,
} from "../Controller/UserController";
const initWebRoute = (app) => {
  app.get("/", getHomePage);
  app.get("/login", getLoginPage);
  app.get("/about", getAboutPage);
  app.get("/contact", getContactPage);
  app.get("/user", getUserPage);
  app.get("/user/view/:username", getViewPage);
  app.get("/user/AddUser", getAddUserPage);
  app.get("/user/update/:username", getUpdateUserPage);
  //api
  app.post("/api/addUser", addUser);
  app.post("/api/updateUser", updateUser);
  app.post("/api/removeUser", removeUser);
};
export default initWebRoute;
