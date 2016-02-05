var display = document.getElementById('num-display');

// define Calculator object
function Calculator() {
  this.ans = "";
  this.disp = "";
}

// extend Calculator functionality
Calculator.prototype = {
  updateDisplay: function(value) {
    this.disp += value;
    display.textContent = this.disp;
  }
};

// instantiate new Calculator
var calc = new Calculator();

/*
Event delegate
This code exploits the way events 'bubble up'. Instead of setting individual event listeners
for all the buttons, we can set a single event listener on the parent element and listen
for any events on the children. This is more memory efficient.
*/
document.getElementById('button-tbl').addEventListener('click', function(e) {
  if (e.target && e.target.nodeName.toLowerCase() === 'button') {
    var value = e.target.value;
    calc.updateDisplay(value);
  }
});
