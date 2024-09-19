import http from "http";
import getDate from "./date";
import { getPath, getParamsURL } from "./getURL";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
  res.write(`${getDate()}<br>`);
  res.write(`${getPath(req)}<br>`);
  res.write(`${getParamsURL(req)}<br>`);
  res.end("Hello KTPM0121, chúc bạn thành công với NodeJS");
});

server.listen(8080, () => {
  console.log("http://localhost:8080");
});
