"use strict"

// # 처리된 변수는 Public한 변수에서 private한 변수로 설정 (즉, 외부에서 불러올 수 없다.)
class UserStorage {
    static #users = {
        id: ["minjung0204", "신현수", "정종현"],
        psword: ["1234", "1234", "12345"],
        name: ["김민중", "신현수", "정종현"],
    };
    // 은닉화된 데이터를 외부에서 쓸 수 있는 메서드(UserStorage 클래스 안에 정의된 함수)
    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);  // =>[id, psword, name]
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }

    static save(userInfo){
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        return { success : true };
    }
}
module.exports = UserStorage;
