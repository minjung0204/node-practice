"use strict"

const fs = require("fs").promises;

class UserStorage {
    static #getUserInfo(data, id){
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);  
        const usersKeys = Object.keys(users); // =>[id, psword, name]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }

    static #getUsers(data, isAll, fields){
        const users = JSON.parse(data);
        if (isAll) return users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;

    }

    static getUsers(isAll, ...fields){
        return fs.
        readFile("./src/databases/users.json")
        .then((data) => {    // 18번이 성공 했을 때, 실행 되는 문
            return this.#getUsers(data, isAll, fields);
        })
        .catch(console.error); // .catch(err) => console.log(err);  // 18번이 실패 했을 때, 실행 되는 문 
    } 

    static getUserInfo(id){
        return fs.
        readFile("./src/databases/users.json")
        .then((data) => {    // 18번이 성공 했을 때, 실행 되는 문
            return this.#getUserInfo(data, id);
        })
        .catch(console.error); // .catch(err) => console.log(err);  // 18번이 실패 했을 때, 실행 되는 문 
    }

    static async save(userInfo){ 
        const users = await this.getUsers(true); 
        if (users.id.includes(userInfo.id)){
            throw "이미 존재하는 아이디입니다.";
        }
        // 데이터 추가
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        return { success : true };
    }
}
module.exports = UserStorage;
