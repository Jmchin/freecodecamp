// Pomodoro constructor definition
function Pomodoro() {
    this.state = false;
    this.breakTime = breakTime;
    this.sessionTime = sessionTime;
    // this.time = timeRemaining;
    // this.id = session;
}

// define variables
var breakTime = 5
var sessionTime = 25

// add functionality to Pomodoro prototype
Pomodoro.prototype = {
    constructor: Pomodoro,
    updateBreak: function() {
        document.getElementById('breakLng').innerHTML = String(breakTime);
    },
    updateSession: function() {
        document.getElementById('sessionLng').innerHTML = String(sessionTime); 
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