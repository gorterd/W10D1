/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/*! exports provided: Clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Clock\", function() { return Clock; });\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n// import warmUp from \"./warmup\";\n\n\nclass Clock {\n    constructor(){\n        let now = new Date();\n        this.sec = now.getSeconds();\n        this.min = now.getMinutes();\n        this.hr = now.getHours();\n        this.el = document.getElementById(\"clock\");   \n        setInterval(this._tick.bind(this), 1000);      \n    }\n\n    printTime(){\n        let timeNow = `${this.hr} : ${this.min} : ${this.sec}`;\n        Object(_warmup__WEBPACK_IMPORTED_MODULE_0__[\"htmlGenerator\"])(timeNow, this.el);\n    }\n\n    _tick(){\n        this.sec++;\n\n        if (this.sec === 60){\n            this.min++;\n            this.sec = 0;\n        } \n\n        if (this.min === 60) {\n            this.hr++;\n            this.min = 0;\n        } \n\n        if (this.hr === 24) {\n            this.hr = 0;\n        }\n\n        this.printTime();\n    }\n}\n\nconst clock = new Clock();\n\n\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/*! exports provided: dogLinkCreator, handleEnter, handleLeave */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dogLinkCreator\", function() { return dogLinkCreator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleEnter\", function() { return handleEnter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleLeave\", function() { return handleLeave; });\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n\n\nconst dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\nconst dogLinkCreator = function(){\n  const dogLinks = [];\n  Object.keys(dogs).forEach( (dog) => {\n    let dogLi = document.createElement(\"li\");\n    let dogA = document.createElement(\"a\");\n    dogA.innerHTML = dog;\n    dogA.href = dogs[dog];\n    dogLi.append(dogA);\n    dogLi.className = \"dog-link\";\n    dogLinks.push(dogLi);\n  });\n\n  return dogLinks;\n}\n\nconst attachDogLinks = function(){\n  const dogLinks = dogLinkCreator();\n  const dogUl = document.querySelector(\".drop-down-dog-list\");\n\n  dogLinks.forEach( (dogLi) => {\n    dogUl.append(dogLi);\n  });\n}\n\nconst handleEnter = function(){\n  const dogLinks = document.getElementsByClassName(\"dog-link\");\n  let arr = Array.from(dogLinks);\n\n  arr.forEach(dog => {\n    dog.classList.remove(\"hidden\");\n  })\n}\n\nconst handleLeave = function(){\n  const dogLinks = document.getElementsByClassName(\"dog-link\");\n  let arr = Array.from(dogLinks);\n\n  arr.forEach(dog => {\n    dog.classList.add(\"hidden\");\n  })\n}\n\n\n\nattachDogLinks();\n\n\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down */ \"./src/drop_down.js\");\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo_list */ \"./src/todo_list.js\");\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_todo_list__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _slide_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slide_scroll */ \"./src/slide_scroll.js\");\n/* harmony import */ var _slide_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_slide_scroll__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search */ \"./src/search.js\");\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_search__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst list = document.getElementsByClassName(\"drop-down-dog-nav\")[0];\n\nlist.addEventListener(\"mouseenter\", _drop_down__WEBPACK_IMPORTED_MODULE_2__[\"handleEnter\"]);\nlist.addEventListener(\"mouseleave\", _drop_down__WEBPACK_IMPORTED_MODULE_2__[\"handleLeave\"]);\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/search.js":
/*!***********************!*\
  !*** ./src/search.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// const pokemonAPI = 'https://pokeapi.co/api/v2/pokemon/?offset=150&limit=150'\n\n// const pokedex;\n\n// window.fetch(pokemonAPI).then( res => { \n//     // pokedex = res.json();\n//     // console.log(res); \n// });\n\n\n\n//# sourceURL=webpack:///./src/search.js?");

/***/ }),

/***/ "./src/slide_scroll.js":
/*!*****************************!*\
  !*** ./src/slide_scroll.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function debounce(func, wait = 20, immediate = true) {\n  let timeout;\n\n  // This is the function that is actually executed when\n  // the DOM event is triggered.\n  return function executedFunction() {\n    // Store the context of this and any\n    // parameters passed to executedFunction\n    const context = this;\n    const args = arguments;\n\n    // The function to be called after debounce time has elapsed\n    const later = function () {\n      // null timeout to indicate the debounce ended\n      timeout = null;\n\n      // Call function now if you did not in the beginning\n      if (!immediate) func.apply(context, args);\n    };\n\n    // Determine if you should call the function\n    // on the leading or trail end\n    const callNow = immediate && !timeout;\n\n    // This will reset the waiting every function execution.\n    clearTimeout(timeout);\n\n    // Restart the debounce waiting period - returns true\n    timeout = setTimeout(later, wait);\n\n    // Call immediately if you're doing a leading end execution\n    if (callNow) func.apply(context, args);\n  };\n}\n\nwindow.addEventListener(\"scroll\", debounce(scrollHandler))\n\nfunction scrollHandler(e){\n  let imgs = document.querySelectorAll(\".slide-and-scroll img\");\n  let imgArray = Array.from(imgs);\n  // console.log(imgArray[0].getBoundingClientRect());\n\n  imgArray.forEach( img => {\n    // console.log(img.getBoundingClientRect());\n    let posData = img.getBoundingClientRect();\n    let change = (posData.bottom + posData.top) / 2;\n    if (window.innerHeight > change && (change > 0)){\n      img.classList.add(\"active\");\n    } else{\n      img.classList.remove(\"active\");\n    }\n    // \n  })\n}\n\n//# sourceURL=webpack:///./src/slide_scroll.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let todos = [];\n\nconst ul = document.querySelector(\"ul.todos\");\nconst form = document.querySelector(\"form.add-todo-form\");\n\nform.addEventListener(\"submit\", addToDo);\n\nfunction addToDo(e){\n    e.preventDefault();\n    const input = document.querySelector(\"input[name='add-todo']\");\n    const todo = {\n        value: input.value,\n        done: false\n    };\n    input.value = \"\";\n    todos.push(todo);\n    localStorage.setItem(\"todos-list\", JSON.stringify(todos))\n    appendTodo(todo);\n\n    console.log(todos);\n    // populateList(todos);\n}\n\nfunction appendTodo(todo){\n    let label = document.createElement(\"label\");\n    label.innerHTML = todo.value;\n    let checkbox = document.createElement(\"input\");\n    checkbox.type = \"checkbox\";\n    checkbox.checked = todo.done;\n    checkbox.data =  todo;\n\n    let li = document.createElement(\"li\");\n    li.append(label, checkbox);\n    ul.append(li); \n    // todos.forEach( (todo) => {\n    //     let label = document.createElement(\"label\");\n    //     label.innerHTML = todo.value;\n    //     let checkbox = document.createElement(\"input\");\n    //     checkbox.type = \"checkbox\";\n    //     checkbox.checked = todo.done;\n\n    //     let li = document.createElement(\"li\");\n    //     li.append(label, checkbox);\n    //     ul.append(li); \n    // });\n}\n\nfunction initializeList(){\n    todos.forEach( (todo) => {\n        appendTodo(todo);     \n    });\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", function(){\n    let storedTodos = localStorage.getItem(\"todos-list\");\n    \n    if (storedTodos){\n        todos = JSON.parse(storedTodos);\n        initializeList();\n    }\n});\n\nlet cb = document.querySelectorAll(\".todos input[type=checkbox]\");\n\n// Array.from(cb).forEach(el => {\n    ul.addEventListener(\"click\", function(e){\n        if (e.target.type === \"checkbox\"){\n            let temp = e.target;\n            let todo = temp.data;\n            todo.done = temp.checked;\n            localStorage.setItem(\"todos-list\", JSON.stringify(todos));\n        }\n        // let checkbox = e.currentTarget;\n        // let todo = checkbox.data;\n        // todo.done = checkbox.checked;\n        \n    })\n// })\n\n\n//# sourceURL=webpack:///./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/*! exports provided: htmlGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"htmlGenerator\", function() { return htmlGenerator; });\n\nconst partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n    const childrens = Array.from(htmlElement.children);\n    \n    if (childrens.length){\n        htmlElement.innerHTML = \"\";\n    }\n\n    const newEl = document.createElement(\"p\");\n\n    newEl.innerHTML = string;\n    htmlElement.append(newEl);\n};\n\nhtmlGenerator('Party Time.', partyHeader);\n\n\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ });