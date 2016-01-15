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
    toggleTimer: function() {
        if (this.state === false) {
            this.state = true
        } else {
            this.state = false
        }
    },
    updateBreak: function() {
        document.getElementById('breakLng').textContent = String(breakTime);
        // convert time to milliseconds
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
var minusBreak = document.getElementById('break-down');
minusBreak.addEventListener('click', function() {
    if (pomodoro.state === false && breakTime > 0) {
        breakTime--;
    }
    pomodoro.updateBreak();
})

var plusBreak = document.getElementById('break-up');
plusBreak.addEventListener('click', function() {
    if (pomodoro.state === false) {
        breakTime++;
    }
    pomodoro.updateBreak();
})

var minusSession = document.getElementById('session-down');
minusSession.addEventListener('click', function() {
    if (pomodoro.state === false && sessionTime > 0) {
        sessionTime--;
    }
    pomodoro.updateSession();
})

var plusSession = document.getElementById('session-up');
plusSession.addEventListener('click', function() {
    if (pomodoro.state === false) {
        sessionTime++;
    }
    pomodoro.updateSession();
})

var toggleState = document.getElementById('toggle');
toggleState.addEventListener('click', function() {
    pomodoro.toggleTimer();
})

pomodoro.updateBreak();
pomodoro.updateSession();