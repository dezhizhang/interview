/*
 * :file description: 
 * :name: /jsApi/examples/59如果实现一个 require.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-09-22 19:24:53
 * :last editor: 张德志
 * :date last edited: 2024-09-22 19:43:06
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');


function myRequire(filename) {
    const fileContent = fs.readFileSync(path.resolve(__dirname,filename),'utf-8');

    const wrapper = `(function(require,module,exports) {
        ${fileContent}
    })`;

    const scripts = new vm.Script(wrapper,{
        filename:'index.js',
    });

    const module = {
        exports:{}
    }
    const func = scripts.runInThisContext();
    func(myRequire,module,module.exports);

    return module.exports;
}

console.log(myRequire('./module.js'));



