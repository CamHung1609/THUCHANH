import express from "express";
import dotenv from "dotenv/config";
import bodyParser from "body-parser";
import RedisStore from "connect-redis";
import { createClient } from "redis";

import viewEngine from "./viewEngine";
import initWebRoutes from "./routes";
import session from "express-session";

import sequelize from "./models/index.js";

const app = express();

// Kết nối với cơ sở dữ liệu
sequelize.sync({ force: false }).then(() => {
  console.log("Database & tables created!");
});
const redisClient = createClient({
  password: "ZnYkLrXuLJrlF0UWEKQtyKpp4m8gvx0V",
  socket: {
    host: "redis-18825.c92.us-east-1-3.ec2.redns.redis-cloud.com",
    port: 18825,
  },
});
// xử lý lỗi redis
redisClient.connect().catch(console.error);
redisClient.on("error", (err) => {
  console.error("Redis client error", err);
});

let redisStore = new RedisStore({
  client: redisClient,
  prefix: "myapp:",
});

app.use(
  session({
    secret: "camhung12345",
    store: redisStore,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
viewEngine(app);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = process.env.PORT;
initWebRoutes(app);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
