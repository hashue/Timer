import { Time } from "./time";
const time = new Time();

let start: HTMLInputElement = <HTMLInputElement>document.getElementById("start");
start.addEventListener("click", () => {
  time.prepareTime("focus");
});

let Break: HTMLInputElement = <HTMLInputElement>document.getElementById("break");
Break.addEventListener("click", () => {
  time.prepareTime("break");
});

let Reset: HTMLInputElement = <HTMLInputElement>document.getElementById("reset");
Reset.addEventListener("click", () => {
  time.resetTime();
});
