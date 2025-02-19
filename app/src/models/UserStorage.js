"use strict"

// # 처리된 변수는 Public한 변수에서 private한 변수로 설정 (즉, 외부에서 불러올 수 없다.)
class UserStorage {
    static #users = {
        id: ["minjung0204", "신현수", "정종현"],
        psword: ["1234", "1234", "12345"],
    };
    // 은닉화된 데이터를 외부에서 쓸 수 있는 메서드(UserStorage 클래스 안에 정의된 함수)
    static getUsers(){
        return this.#users;
    }
}

module.exports = UserStorage;
