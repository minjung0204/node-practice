"use strict";

const express = require("express");
const router = express.Router(); // Router() 함수

const ctrl = require("./home.ctrl")

router.get("/", ctrl.output.home); 
router.get("/login", ctrl.output.login); 
router.get("/register", ctrl.output.register);
router.post("/login", ctrl.process.login); 



// 외부 파일에서 사용할 수 있게 설정
module.exports = router;