/**
 * formの値を取得する
 * @function formValue
 * @param {string} key - 取得するDOMのid
 */
function formValue(key: string): string {
    let DOM: HTMLInputElement = <HTMLInputElement>document.getElementById(key);
    if (DOM.value == "") {
        DOM.value = "0";
    }
    return DOM.value;
}
function setFormValue(key: string,value:number){
    let DOM: HTMLInputElement = <HTMLInputElement>document.getElementById(key);
    DOM.value = value.toString();
}

/**
 * zeroPadding.
 *
 * @param {number} num
 * @param {number} len
 * @returns {string}
 */
function zeroPadding(num: number, len: number): string {
    return (Array(len).join("0") + num).slice(-len);
}

/**
 * sendPushNotification.
 *
 * @param {string} subject
 * @param {string} body
 */
function sendPushNotification(subject:string, body:string) {
  Push.create(subject, {
    body: body,
    timeout: 6000,
  });
}
