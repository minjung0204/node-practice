"use strict";


// 모듈
const express = require("express");
const app = express();

const PORT = 3000;

// 라우팅
const home = require("./src/routes/home"); 

// 앱 세팅 // JS에서 화면(views)를 처리해줄 수 있는 뷰 엔진 세팅
// views의 파일이 저장될 파일이 두 번쨰 파라미터
app.set("views", "./src/views");
app.set("view engine", "ejs"); // html의 코드들을 어떤 엔진으로 해석할 지 세팅! "ejs"
app.use(express.static(`${__dirname}/src/public`)); 
// 11번 라우팅 연결 
app.use("/", home); // use는 미들 웨어를 등록해주는 메서드



// app.get("/", (req, res) => {
//     res.render("home/index.ejs"); // 6번에 상위폴더를 지정하여 views 파일을 안 해도 된다.
// });

// app.get("/login", (req, res) =>{
//     res.render("home/login.ejs"); // 6번에 상위폴더를 지정하여 views 파일을 안 해도 된다.
// });

module.exports = app;


// // http는 내장 모듈
// const http = require("http");
// const app2 = http.createServer((req, res) => {
//     res.writeHead(200, {"content-type": "text/html; charset=utf-8"});
//     console.log(req.url);
//     if(req.url === "/"){
//         res.end("여기는 루트입니다.");
//     }else if(req.url === "/login"){
//         res.end("여기는 로그인 화면입니다."); 
//     }
// });

// app2.listen(3001, () => {
//     console.log("http로 가동된 서버입니다.");
// });