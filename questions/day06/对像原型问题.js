/*
 * @Author: your name
 * @Date: 2021-03-06 22:09:06
 * @LastEditTime: 2021-03-06 22:28:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /interview/questions/day06/对像原型问题.js
 */


//  function foo() {
//      foo.a = function() {
//          console.log('1');
//      }
//      this.a = function() {
//         console.log('2');
//      }
//      a = function() {
//          console.log('3');
//      }
//      var a = function() {
//          console.log('4')
//      }
//  }

//  foo.prototype.a = function() {
//      console.log('5');
//  }
 
//  foo.a = function() {
//      console.log('6')
//  }

//  foo.a() // 1
//  let obj = new foo();
//  obj.a() //2
//  foo.a() //1

// function foo() {
//     foo.a = function() {
//         console.log('1');
//     }
//     this.a = function() {
//         console.log('2');
//     }
//     a = function() {
//         console.log('3');
//     }
//     var a = function() {
//         console.log('4')
//     }
// }

// foo.prototype.a = function() {
//     console.log('5');
// }

// foo.a = function() {
//     console.log('6');
// }

// foo.a() // 6
// let obj = new foo();
// obj.a() // 2
// foo.a() // 1

function foo() {
    foo.a = function() {
        console.log('1');
    }
    this.a = function() {
        console.log('2');
    }
    a = function() {
        console.log('3');
    }
    var a = function() {
        console.log('4')
    }
}

foo.prototype.a = function() {
    console.log('5');
}

foo.a = function() {
    console.log('6')
}

foo.a() // 6
let obj = new foo()
obj.a(); // 2 
foo.a(); // 1
 
