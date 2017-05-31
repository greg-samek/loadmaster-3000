var DataStore = {
  storeSize10: [], // Stores last 10 minutes of load.
  storeSize2: [], // Stores last 2 minutes of load.
  sum: 0,
  // Adds values to storeSize2 and storeSize10, ensures max size.
  addValue: function(value) {
    if ( this.storeSize10.size === 60 ) {
      this.storeSize10.shift();
    }

    if ( this.storeSize2.size === 12 ) {
      if ( this.sum ) { this.sum -= this.storeSize2[0] };
      this.storeSize2.shift();
    }

    this.storeSize10.push(value);
    this.storeSize2.push(value);
    if ( this.sum ) { this.sum += value };
    return false;
  },
  // Calculates 2 minute load average.
  getAverage: function() {
    if ( !this.sum ) {
      this.sum = this.storeSize2.reduce(function(sum, val) {
       return sum + val;
     }, 0);
    }
    return this.sum / 12;
  }
}

module.exports = DataStore;