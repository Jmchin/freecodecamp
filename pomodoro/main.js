// define global variables
var breakTime = 5
var sessionTime = 25


// Pomodoro constructor definition
function Pomodoro() {
    this.state = false;
    this.breakTime;
    this.sessionTime;
    this.time;
    this.id;
}

// add functionality to Pomodoro prototype
Pomodoro.prototype = {
    constructor: Pomodoro,
    startTimer: function() {
        
    },
    updateBreak: function() {
        document.getElementById('breakLng').textContent = String(breakTime);
        pomodoro.breakTime = breakTime * 60 * 1000;
    },
    updateSession: function() {
        document.getElementById('sessionLng').textContent = String(sessionTime);
        pomodoro.sessionTime = sessionTime * 60 * 1000;
    },
    updateTime: function() {
        document.getElementById('timerNum').textContent = String(this.time / 1000);
    }
};

// create instance pomodoro of Object Pomodoro
var pomodoro = new Pomodoro();

// event listeners
document.getElementById('break-down').addEventListener('click', function() {
    if (breakTime > 0) {
        breakTime--
    } else {
        breakTime === 0
    }
    pomodoro.updateBreak()
})

document.getElementById('break-up').addEventListener('click', function() {
    breakTime++
    pomodoro.updateBreak()
})

pomodoro.updateBreak();
pomodoro.updateSession();