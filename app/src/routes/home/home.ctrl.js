"use strict";

const User = require("../../models/User");

const output = {
    home: (req, res) => {
        res.render("home/index"); 
    },
    
    login: (req, res) =>{
        res.render("home/login");
    },
};

const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);

        // const id = req.body.id,
        //     psword = req.body.psword;
        
        //     const users = (UserStorage.getUsers("id", "psword"));
    
        // // 아이디 비밀번호 검증
        // const response = {}; // response 변수를 객체로 생성
        // if(users.id.includes(id)){
        //     const idx = users.id.indexOf(id);
        //     if(users.psword[idx] === psword){
        //         response.success = true;
        //         return res.json(response);
        //     }
        // }
        // response.success = false;
        // response.msg = "로그인에 실패하였습니다.";
        // return res.json(response);
    },
};

module.exports ={
    output,
    process,
}