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
function setFormValue(key, value) {
    let DOM = document.getElementById(key);
    DOM.value = value.toString();
}
/**
 * zeroPadding.
 *
 * @param {number} num
 * @param {number} len
 * @returns {string}
 */
function zeroPadding(num, len) {
    return (Array(len).join("0") + num).slice(-len);
}
/**
 * sendPushNotification.
 *
 * @param {string} subject
 * @param {string} body
 */
function sendPushNotification(subject, body) {
    Push.create(subject, {
        body: body,
        timeout: 6000,
    });
}
