import { getHomePage } from "../Controller/HomeController";
import { getAboutPage } from "../Controller/AboutController";
import { getUserPage } from "../Controller/UserController";
const initWebRoute = (app) => {
  app.get("/", getHomePage);
  app.get("/about", getAboutPage);
  app.get("/user", getUserPage);
};
export default initWebRoute;
