import { Util } from "./util";
const audio = new Audio("./src/sound/sound.mp3");
const util = new Util();
let time: number;
let count_interval: number;
type stat = "focus" | "break";

export class Time {
  /**
   * 取得した時間を秒に変換し、カウント関数に渡す
   * @function prepareTime
   * @param {stat} kind - サイクルのどちらを実行するかを指定
   */
  prepareTime(kind: stat) {
    if (count_interval !== 0) {
      this.stopInterval();
    }
    time = parseInt(util.formValue(`${kind}_min`)) * 60 + parseInt(util.formValue(`${kind}_sec`));
    count_interval = window.setInterval(() => {
      this.countDown();
    }, 1000);
  }

  countDown() {
    if (time == 0) {
      audio.play();
      setTimeout(() => {
        this.stopInterval();
      }, 5000);
    } else {
      time--;
      this.updateTime(time);
    }
  }

  /**
   * convertToTime.
   *
   * @param {number} time
   * @returns {string}
   */
  convertToTime(time: number): string {
    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);
    return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  }

  /**
   * updateTime.
   *
   * @param {number} time
   */
  updateTime(time: number) {
    let nowtime: HTMLInputElement = <HTMLInputElement>document.getElementById("nowtime");
    nowtime.textContent = this.convertToTime(time);
  }

  resetTime() {
    this.stopInterval();
    time = 0;
    this.updateTime(time);
  }

  stopInterval() {
    clearInterval(count_interval);
    audio.pause();
    audio.currentTime = 0;
  }
}
