var a = 5;
var b = a;

b++;

console.log(a);
console.log(b);

let obj1 = {name: "Yao", password: "123"};
let obj2 = obj1

obj2.password = "easy"

console.log(obj1.password)
console.log(obj2.password)
//obj1 are pointing in memory to a shelf that container the value, when you change obj2, the change is passed through to obj1 as it is being referenced. 

