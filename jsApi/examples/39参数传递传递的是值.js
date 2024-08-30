
var a= {age:12}
var b = a;
a = {name:'bob',age:13};
b.age = 14;

console.log(b.age,a.name,a.age);

function fn2(obj) {
    obj = {age:15}
}

fn2(a);
console.log(a.age);
