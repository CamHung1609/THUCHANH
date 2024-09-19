import express from "express";
import dotenv from "dotenv/config";
import getDate from "./date";
import { getPath, getParamsURL } from "./getURL";
import viewEngine from "./viewEngine";

const app = express();
viewEngine(app);
const port = process.env.PORT;
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/date", (req, res) => {
  res.send(getDate());
});
app.get("/geturl", (req, res) => {
  res.send(getPath(req) + "<br>" + getParamsURL(req));
});
app.get("/ejs", (req, res) => {
  res.render("test");
});
app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(port, () => {
  console.log(`cong http://localhost:${port}`);
});
