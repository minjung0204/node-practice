const values = [1,2,3,4,5,6];

const average = values.reduce((acc, cur, i, { length}) => {
    return i === length - 1 ? (acc + cur) / length : acc + cur;
}, 0);


var x = 10;
var result = x % 2 ? '홀수' : '짝수';
console.log(10 % 2);

console.log(result);