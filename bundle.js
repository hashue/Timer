/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _preset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preset */ \"./src/ts/preset.ts\");\n// import { formValue } from \"./util.js\";\n// const audio = new Audio(\"./src/sound/sound.mp3\");\n// let time: number;\n// let count_interval: number;\n//\n// type stat = \"focus\" | \"break\";\n//\n// /**\n//  * 取得した時間を秒に変換し、カウント関数に渡す\n//  * @function prepareTime\n//  * @param {stat} kind - サイクルのどちらを実行するかを指定\n//  */\n// function prepareTime(kind: stat) {\n//   if (count_interval !== 0) {\n//     stopInterval();\n//   }\n//   time =\n//     parseInt(formValue(`${kind}_min`)) * 60 +\n//     parseInt(formValue(`${kind}_sec`));\n//   count_interval = window.setInterval(countDown, 1000);\n// }\n//\n// function countDown() {\n//   if (time == 0) {\n//     audio.play();\n//   } else {\n//     time--;\n//     updateTime(time);\n//   }\n// }\n//\n// /**\n//  * convertToTime.\n//  *\n//  * @param {number} time\n//  * @returns {string}\n//  */\n// function convertToTime(time: number): string {\n//   let min = Math.floor(time / 60);\n//   let sec = Math.floor(time % 60);\n//   return `${min.toString().padStart(2, \"0\")}:${sec\n//     .toString()\n//     .padStart(2, \"0\")}`;\n// }\n//\n// /**\n//  * updateTime.\n//  *\n//  * @param {number} time\n//  */\n// function updateTime(time: number) {\n//   let nowtime: HTMLInputElement = <HTMLInputElement>(\n//     document.getElementById(\"nowtime\")\n//   );\n//   nowtime.textContent = convertToTime(time);\n// }\n//\n// function resetTime() {\n//   stopInterval();\n//   time = 0;\n//   updateTime(time);\n// }\n//\n// function stopInterval() {\n//   clearInterval(count_interval);\n//   audio.pause();\n//   audio.currentTime = 0;\n// }\n\nlet dom = document.getElementById(\"start\");\ndom.addEventListener(\"click\", () => {\n    (0,_preset__WEBPACK_IMPORTED_MODULE_0__.alert)();\n});\n\n\n//# sourceURL=webpack://Timer/./src/ts/index.ts?");

/***/ }),

/***/ "./src/ts/preset.ts":
/*!**************************!*\
  !*** ./src/ts/preset.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"alert\": () => (/* binding */ alert)\n/* harmony export */ });\n// import Push from \"push.js\";\n// import { setFormValue } from \"./util.js\";\n// const preset_elm: HTMLInputElement = <HTMLInputElement>(\n//   document.getElementById(\"preset\")\n// );\n// let key_name: string | null;\n//\n// const preset_prefix: string = \"tp_\";\n//\n// window.onload = () => {\n//   Push.Permission.request();\n//\n//   let preset_content = document.querySelectorAll(\".preset\");\n//   if (localStorage.length > 0) {\n//     for (let i = 0; i < preset_content.length; ++i) {\n//       preset_content[i].classList.add(\"isActive\");\n//     }\n//   }\n//   generateChoices();\n// };\n//\n// function generateChoices() {\n//   for (let i = 0; i < localStorage.length; ++i) {\n//     let li = document.createElement(\"option\");\n//     key_name = localStorage.key(i);\n//     if (key_name?.includes(preset_prefix)) {\n//       li.textContent = key_name.slice(3);\n//       li.setAttribute(\"value\", i.toString());\n//       preset_elm.appendChild(li);\n//     } else {\n//       continue;\n//     }\n//   }\n// }\n//\n// function togglePresetElm() {\n//   const ul = document.querySelector(\".preset_wrapper\");\n//   ul?.classList.toggle(\"open\");\n// }\n//\n// type Preset = {\n//   work_min: number;\n//   work_sec: number;\n//   break_min: number;\n//   break_sec: number;\n// };\n//\n// function generatePattern() {\n//   let preset_name: string | null = prompt(\n//     \"プリセット名を入力してください\",\n//     \"無題のプリセット\"\n//   );\n//   if (typeof preset_name !== \"string\") throw alert(\"キャンセルされました。\");\n//\n//   let w_min: string | null = prompt(\"集中したい分数を入力してください\", \"0\");\n//   if (typeof w_min !== \"string\") throw alert(\"キャンセルされました。\");\n//\n//   let w_sec: string | null = prompt(\"集中したい秒数を入力してください\", \"0\");\n//   if (typeof w_sec !== \"string\") throw alert(\"キャンセルされました。\");\n//\n//   let b_min = prompt(\"休憩したい分数を入力してください\", \"0\");\n//   if (typeof b_min !== \"string\") throw alert(\"キャンセルされました。\");\n//\n//   let b_sec = prompt(\"休憩したい秒数を入力してください\", \"0\");\n//   if (typeof b_sec !== \"string\") throw alert(\"キャンセルされました。\");\n//\n//   if (w_min == \"0\" && w_sec == \"0\" && b_min == \"0\" && b_sec == \"0\") {\n//     throw alert(\"すべての入力値が0です\");\n//   }\n//\n//   let raw_preset: Preset = {\n//     work_min: parseInt(w_min) * 60,\n//     work_sec: parseInt(w_sec),\n//     break_min: parseInt(b_min) * 60,\n//     break_sec: parseInt(b_sec),\n//   };\n//\n//   savePattern(raw_preset, preset_name);\n// }\n//\n// /**\n//  * savePattern.\n//  *\n//  * @param {Preset} preset_obj\n//  * @param {string} preset_name\n//  */\n// function savePattern(preset_obj: Preset, preset_name: string) {\n//   let obj = JSON.stringify(preset_obj);\n//\n//   localStorage.setItem(preset_prefix + preset_name, obj);\n//   location.reload();\n// }\n//\n// function applyPreset() {\n//   let no: HTMLInputElement = <HTMLInputElement>(\n//     document.getElementById(\"preset\")\n//   );\n//   key_name = localStorage.key(parseInt(no.value));\n//   let extracted_val = JSON.parse(\n//     localStorage.getItem(key_name as string) || \"{}\"\n//   );\n//\n//   setFormValue(\"focus_min\", extracted_val.work_min / 60);\n//   setFormValue(\"focus_sec\", extracted_val.work_sec);\n//   setFormValue(\"break_min\", extracted_val.break_min / 60);\n//   setFormValue(\"break_sec\", extracted_val.break_sec);\n// }\n//\n// function removePreset(btn: HTMLInputElement) {\n//   key_name = localStorage.key(parseInt(btn.value));\n//   localStorage.removeItem(key_name as string);\n//   location.reload();\n// }\nfunction alert() {\n    console.log(\"demo\");\n}\n\n\n//# sourceURL=webpack://Timer/./src/ts/preset.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ts/index.ts");
/******/ 	
/******/ })()
;