"use strict";

const express = require("express");
const router = express.Router(); // Router() 함수

const ctrl = require("./home.ctrl")

router.get("/", ctrl.hello); 
router.get("/login", ctrl.login); 




// 외부 파일에서 사용할 수 있게 설정
module.exports = router;