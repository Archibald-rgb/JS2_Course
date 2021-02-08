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

/***/ "./src/server/cart.js":
/*!****************************!*\
  !*** ./src/server/cart.js ***!
  \****************************/
/***/ ((module) => {

eval("const add = (cart, req) => {\n  cart.contents.push(req.body);\n  return {\n    newCart: JSON.stringify(cart, null, 4),\n    name: req.body.product_name\n  };\n};\n\nconst change = (cart, req) => {\n  let find = cart.contents.find(el => el.id_product === +req.params.id);\n  find.quantity += req.body.quantity;\n  return {\n    newCart: JSON.stringify(cart, null, 4),\n    name: find.product_name\n  };\n};\n\nconst remove = (cart, req) => {\n  let find = cart.contents.find(el => el.id_product === +req.params.id);\n  cart.contents.splice(cart.contents.indexOf(find), 1);\n  return {\n    newCart: JSON.stringify(cart, null, 4),\n    name: find.product_name\n  };\n};\n\nmodule.exports = {\n  add,\n  change,\n  remove\n};\n\n//# sourceURL=webpack://express_app/./src/server/cart.js?");

/***/ }),

/***/ "./src/server/cartRouter.js":
/*!**********************************!*\
  !*** ./src/server/cartRouter.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\n\nconst handler = __webpack_require__(/*! ./handler */ \"./src/server/handler.js\");\n\nconst fs = __webpack_require__(/*! fs */ \"fs\");\n\nconst router = express.Router();\nrouter.get('/', (req, res) => {\n  fs.readFile('dist/server/db/userCart.json', (err, data) => {\n    if (err) {\n      console.log(err);\n      res.send({\n        result: 0,\n        text: err\n      });\n      return;\n    }\n\n    res.send(data);\n  });\n});\nrouter.post('/', (req, res) => {\n  handler(req, res, 'add', 'dist/server/db/userCart.json');\n});\nrouter.put('/:id', (req, res) => {\n  handler(req, res, 'change', 'dist/server/db/userCart.json');\n});\nrouter.delete('/:id', (req, res) => {\n  handler(req, res, 'remove', 'dist/server/db/userCart.json');\n});\nmodule.exports = router;\n\n//# sourceURL=webpack://express_app/./src/server/cartRouter.js?");

/***/ }),

/***/ "./src/server/handler.js":
/*!*******************************!*\
  !*** ./src/server/handler.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const cart = __webpack_require__(/*! ./cart */ \"./src/server/cart.js\");\n\nconst fs = __webpack_require__(/*! fs */ \"fs\");\n\nconst logging = __webpack_require__(/*! ./logging */ \"./src/server/logging.js\");\n\nconst handler = (req, res, action, file) => {\n  fs.readFile(file, (err, data) => {\n    if (err) {\n      console.log(err);\n      res.send({\n        result: 0,\n        text: err\n      });\n      return;\n    }\n\n    let {\n      newCart,\n      name\n    } = cart[action](JSON.parse(data), req);\n    fs.writeFile(file, newCart, err => {\n      if (err) {\n        console.log(err);\n        res.send({\n          result: 0,\n          text: err\n        });\n        return;\n      }\n\n      logging(action, name);\n      res.send({\n        result: 1\n      });\n    });\n  });\n};\n\nmodule.exports = handler;\n\n//# sourceURL=webpack://express_app/./src/server/handler.js?");

/***/ }),

/***/ "./src/server/logging.js":
/*!*******************************!*\
  !*** ./src/server/logging.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const fs = __webpack_require__(/*! fs */ \"fs\");\n\nconst moment = __webpack_require__(/*! moment */ \"moment\");\n\nconst logging = (action, productName) => {\n  fs.readFile('dist/server/db/log.json', (err, data) => {\n    if (err) {\n      console.log(err);\n      return;\n    }\n\n    let logJson = JSON.parse(data);\n    logJson.push({\n      time: `${moment().format('L')} ${moment().format('LTS')}`,\n      action,\n      productName: productName\n    });\n    fs.writeFile('dist/server/db/log.json', JSON.stringify(logJson, null, 4), err => {\n      if (err) {\n        console.log(err);\n        return;\n      }\n    });\n  });\n};\n\nmodule.exports = logging;\n\n//# sourceURL=webpack://express_app/./src/server/logging.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("moment");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
eval("const express = __webpack_require__(/*! express */ \"express\");\n\nconst fs = __webpack_require__(/*! fs */ \"fs\");\n\nconst cart = __webpack_require__(/*! ./cartRouter */ \"./src/server/cartRouter.js\");\n\nconst app = express();\napp.use(express.json());\napp.use('/', express.static('dist/public'));\napp.use('/api/cart', cart);\napp.get('/api/products', (req, res) => {\n  fs.readFile('dist/server/db/product.json', (err, data) => {\n    if (err) {\n      console.log(err);\n      res.send({\n        result: 0,\n        text: err\n      });\n      return;\n    }\n\n    res.send(data);\n  });\n});\napp.listen(3000, () => console.log('Server started...'));\n\n//# sourceURL=webpack://express_app/./src/server/server.js?");
})();

/******/ })()
;