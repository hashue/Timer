"use strict";
const audio = new Audio('./Clock-Alarm03-01(Loop).mp3');
let time;
let count_interval;
/**
 * 取得した時間を秒に変換し、カウント関数に渡す
 * @function prepareTime
 * @param {stat} kind - サイクルのどちらを実行するかを指定
 */
function prepareTime(kind) {
    if (count_interval !== 0) {
        stopInterval();
    }
    time =
        parseInt(formValue(`${kind}_min`)) * 60 +
            parseInt(formValue(`${kind}_sec`));
    count_interval = setInterval(countDown, 1000);
}
function countDown() {
    if (time == 0) {
        audio.play();
    }
    else {
        time--;
        console.log({ count_interval });
        updateTime(time);
    }
}
/**
 * convertToTime.
 *
 * @param {number} time
 * @returns {string}
 */
function convertToTime(time) {
    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);
    return `${zeroPadding(min, 2)}:${zeroPadding(sec, 2)}`;
}
/**
 * updateTime.
 *
 * @param {number} time
 */
function updateTime(time) {
    let nowtime = document.getElementById("nowtime");
    nowtime.textContent = convertToTime(time);
}
function resetTime() {
    stopInterval();
    time = 0;
    updateTime(time);
}
function stopInterval() {
    clearInterval(count_interval);
    audio.pause();
    audio.currentTime = 0;
}
