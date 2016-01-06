// initialize timer variables
var state = false // timer on/off ?
var breakTime = 5
var sessionTime = 25

// update breakLng, sessionLng and timerNum HTML
var updateBreak = function (min) {
  document.getElementById('breakLng').innerHTML = String(min)
}

var updateSession = function (min) {
  document.getElementById('sessionLng').innerHTML = String(min)
}

var updateTimer = function (min) {
  document.getElementById('timerNum').innerHTML = String(min + ' : 00')
}

// event listeners
document.getElementById('run').addEventListener('click', function () {
  if (state === false) {
    state = true
  } else {
    state = false
  }
})

document.getElementById('break-down').addEventListener('click', function () {
  if (breakTime > 0) {
    breakTime--
  } else {
    breakTime === 0
  }
  updateBreak(breakTime)
})

document.getElementById('break-up').addEventListener('click', function () {
  breakTime++
  updateBreak(breakTime)
})

document.getElementById('session-down').addEventListener('click', function () {
  if (sessionTime > 0) {
    sessionTime--
  } else {
    sessionTime === 0
  }
  updateSession(sessionTime)
  updateTimer(sessionTime)
})

document.getElementById('session-up').addEventListener('click', function () {
  sessionTime++
  updateSession(sessionTime)
  updateTimer(sessionTime)
})

// update times on page load
updateBreak(breakTime)
updateSession(sessionTime)
updateTimer(sessionTime)
