const calculator = {
  add: function (a, b) {
    if (this.isNumber(a) && this.isNumber(b)) {
      return a + b;
    } else {
      return 'Invalid input. Both arguments must be numbers.';
    }
  },

  subtract: function (a, b) {
    if (this.isNumber(a) && this.isNumber(b)) {
      return a - b;
    } else {
      return 'Invalid input. Both arguments must be numbers.';
    }
  },

  divide: function (a, b) {
    if (this.isNumber(a) && this.isNumber(b)) {
      if (b === 0) {
        return 'Cannot divide by zero';
      } else {
        return a / b;
      }
    } else {
      return 'Invalid input. Both arguments must be numbers.';
    }
  },

  multiply: function (a, b) {
    if (this.isNumber(a) && this.isNumber(b)) {
      return a * b;
    } else {
      return 'Invalid input. Both arguments must be numbers.';
    }
  },

  isNumber: function (value) {
    return typeof value === 'number' && !isNaN(value);
  }
};

module.exports = calculator;
