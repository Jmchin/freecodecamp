var display = document.getElementById('num-display');
var operators = ['-', '+', '*', '/', '=', 'AC'];

// define Calculator object
function Calculator() {
  this.ans = '';
  this.disp = '0';
}

// extend Calculator functionality
Calculator.prototype = {
  updateDisplay: function(value) {
    if (this.disp === '0') {
      this.disp = value;
    } else {
      this.disp += value;
    }
    display.textContent = this.disp;
  },
  clearDisplay: function() {
    this.disp = '0';
    this.updateDisplay(this.disp);
  },
  delete: function() {
    this.disp = this.disp.slice(0, -1);
    display.textContent = display.textContent.slice(0, -1);
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

    switch (e.target.value) {
      case 'AC':
        calc.clearDisplay();
        break;
      case 'DEL':
        calc.delete();
        break;
      default:
        calc.updateDisplay(value);
    }
  }
});

calc.updateDisplay(calc.disp);
