const express = require("express");
const http = require("http");
const app = express();

app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "accessToken,Content-Type,*"); //accessToken,Content-Type 用到的必须单独写出来 ，IOS才可以请求
  //   res.header("Access-Control-Allow-Headers", "");
  //   res.header("Access-Control-Allow-Headers", "X-Requested-With");
  /*   res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Headers", "accessToken"); */
  next();
});

app.get("/aaa", function (req, res) {
  res.send("lalalaalal");
});
app.post("/bbb", function (req, res) {
  res.send("lalalaalal");
});
let server = http.createServer(app).listen(5000);
