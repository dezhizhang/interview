/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("/*\n * :file description:\n * :name: /jsApi/src/index.js\n * :author: 张德志\n * :copyright: (c) 2024, Tungee\n * :date created: 2024-04-18 05:51:29\n * :last editor: 张德志\n * :date last edited: 2024-04-26 14:36:21\n */\nfunction ajax(url) {\n  return new Promise((resolve,reject) => {\n    const xhr = new XMLHttpRequest();\n    xhr.open('GET',url,true);\n    xhr.onreadystatechange = () => {\n      if(xhr.readyState === 4 && xhr.status === 200) {\n        resolve(JSON.parse(xhr.responseText))\n      }else if(xhr.status === 400) {\n        reject(new Error('请求出错'))\n      }\n      \n    }\n    xhr.send(null)\n  })\n}\n\najax('https://cnodejs.org/api/v1/topics')\n\n//# sourceURL=webpack://jsapi/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;