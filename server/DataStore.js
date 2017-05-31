var DataStore = {
  storeSize10: [], // Stores last 10 minutes of load.
  storeSize2: [], // Stores last 2 minutes of load.

  // Adds values to storeSize2 and storeSize10, ensures max size.
  addValue: function(value) {
    // ensure max size.
    if ( this.storeSize10.length === 60 ) {
      this.storeSize10.shift();
    }

    // ensure max size.
    if ( this.storeSize2.length === 12 ) {
      this.storeSize2.shift();
    }

    this.storeSize10.push(value);
    this.storeSize2.push(value);
    return false;
  },

  // Calculates 2 minute load average.
  getAverage: function() {
    var sum = this.storeSize2.reduce(function(sum, val) {
      return sum + Number(val);
    }, 0);
    var average = sum / this.storeSize2.length;
    average = Number(Math.round(average+'e2')+'e-2'); // 2 digits.
    return average;
  },

  getStore: function() {
    return this.storeSize10.toString();
  }
}

module.exports = DataStore;