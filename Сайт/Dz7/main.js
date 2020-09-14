setInterval(onIntervalNextTick, 1000);

const htmlElements = {};
htmlElements.startBtn = document.querySelector(
    ".container .buttons button.start"
);
htmlElements.stopBtn = document.querySelector(
    ".container .buttons button.stop"
);
htmlElements.resetBtn = document.querySelector(
    ".container .buttons button.reset"
);
htmlElements.clock = document.querySelector(".container .links .clock");
htmlElements.stopwatch = document.querySelector(".container .links .stopwatch");
htmlElements.timer = document.querySelector(".container .links .timer");
htmlElements.output = document.querySelector(".container .output");

const startTime = new Date().getTime();
const myInterval = setInterval(Timer, 1000);
const output = document.querySelector(".output");