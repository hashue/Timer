"use strict";
/**
 * formの値を取得する
 * @function formValue
 * @param {string} key - 取得するDOMのid
 */
function formValue(key) {
    let DOM = document.getElementById(key);
    if (DOM.value == "") {
        DOM.value = "0";
    }
    return DOM.value;
}
/**
 * zeroPadding.
 *
 * @param {number} num
 * @param {number} len
 * @returns {string}
 */
function zeroPadding(num, len) {
    return (Array(len).join('0') + num).slice(-len);
}
