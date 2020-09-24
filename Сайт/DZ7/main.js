import {
    clockStart
} from './Modules/clock.js';
import {
    stopWatchStart
} from './Modules/stopwatch.js';
import {
    timer
} from './Modules/timer.js';
'use strict'

export const htmlElements = {};
htmlElements.startBtn = document.querySelector('.container .buttons button.start');
htmlElements.stopBtn = document.querySelector('.container .buttons button.stop');
htmlElements.resetBtn = document.querySelector('.container .buttons button.reset');
htmlElements.clock = document.querySelector('.container .links .clock');
htmlElements.watch = document.querySelector('.watch');
htmlElements.stopwatch = document.querySelector('.container .links .stopwatch');
htmlElements.timer = document.querySelector('.container .links .timer');
htmlElements.output = document.querySelector('.container .output');

document.getElementById("button1").style.color = "gray";
document.getElementById("button2").style.color = "gray";
document.getElementById("button3").style.color = "gray";

document.getElementById("button1").onclick = function() {
    this.style.color = "blue";
    document.getElementById("button2").style.color = "gray";
    document.getElementById("button3").style.color = "gray";
};

document.getElementById("button2").onclick = function() {
    this.style.color = "blue";
    document.getElementById("button1").style.color = "gray";
    document.getElementById("button3").style.color = "gray";
};

document.getElementById("button3").onclick = function() {
    this.style.color = "blue";
    document.getElementById("button1").style.color = "gray";
    document.getElementById("button2").style.color = "gray";
};

// const sartTime = new Date(Date.now()).getTime();
// const output = document.getSelection('.output');
// let timerId;
// let hours, minutes, seconds;

function initfunc() {
    htmlElements.clock.addEventListener("click", clockStart);
    htmlElements.stopwatch.addEventListener("click", stopWatchStart);
    htmlElements.timer.addEventListener("click", timer);
}
initfunc();





// function start(st) {
//     window[st]();
//     const elem = document.getElementById("myButton");
// }

// function Timer() {
//     const difference = (new Date().getTime() - sartTime) / 1000;
//     let secods = parseInt(difference % 60);
//     const minutes = parseInt((difference / 60) % 60);
//     if (seconds < 10) {
//         secods = '0' + secods;
//     }
//     const time = `${minutes}:${seconds}`;
// }