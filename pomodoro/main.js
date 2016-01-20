// Pomodoro constructor definition
function Pomodoro() {
  this.state = false;
  this.breakTime = 5;
  this.sessionTime = 25;
  this.time;
  this.id;
}

// add functionality to Pomodoro prototype
Pomodoro.prototype = {
  toggleTimer: function() {
    if (this.state === false) {
      this.state = true
    } else {
      this.state = false
    }
  },
  updateBreak: function() {
    document.getElementById('breakLng').textContent = String(this.breakTime);
  },
  updateSession: function() {
    document.getElementById('sessionLng').textContent = String(this.sessionTime);
    this.updateTime(this.sessionTime);
  },
  decorateTime: function(time) {
    time = String(time) + ' : 00';
    return time;
  },
  updateTime: function(time) {
    document.getElementById('timerNum').textContent = String(this.decorateTime(time));
  },
  initialize: function() {
    this.updateBreak();
    this.updateSession();
    this.updateTime(this.sessionTime);
  }
};

// create instance pomodoro of Object Pomodoro
var pomodoro = new Pomodoro();

// event listeners
var minusBreak = document.getElementById('break-down');
minusBreak.addEventListener('click', function() {
  if (pomodoro.state === false && pomodoro.breakTime > 0) {
    pomodoro.breakTime--
  }
  pomodoro.updateBreak();
})

var plusBreak = document.getElementById('break-up');
plusBreak.addEventListener('click', function() {
  if (pomodoro.state === false) {
    pomodoro.breakTime++;
  }
  pomodoro.updateBreak();
})

var minusSession = document.getElementById('session-down');
minusSession.addEventListener('click', function() {
  if (pomodoro.state === false && pomodoro.sessionTime > 0) {
    pomodoro.sessionTime--;
  }
  pomodoro.updateSession();
})

var plusSession = document.getElementById('session-up');
plusSession.addEventListener('click', function() {
  if (pomodoro.state === false) {
    pomodoro.sessionTime++;
  }
  pomodoro.updateSession();
})

var toggleState = document.getElementById('toggle');
toggleState.addEventListener('click', function() {
  pomodoro.toggleTimer();
})

pomodoro.initialize();
