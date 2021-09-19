import Push from "push.js";

export class Util {
  /**
   * formの値を取得する
   * @function formValue
   * @param {string} key - 取得するDOMのid
   */
  formValue(key: string): string {
    let DOM: HTMLInputElement = <HTMLInputElement>document.getElementById(key);
    if (DOM.value == "") {
      DOM.value = "0";
    }
    return DOM.value;
  }
  setFormValue(key: string, value: number) {
    let DOM: HTMLInputElement = <HTMLInputElement>document.getElementById(key);
    DOM.value = value.toString();
  }
  /**
   * sendPushNotification.
   *
   * @param {string} subject
   * @param {string} body
   */
  sendPushNotification(subject: string, body: string) {
    Push.create(subject, {
      body: body,
      timeout: 6000,
    });
  }
}
