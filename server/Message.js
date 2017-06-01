var moment = require('moment');

var Message = {
  messages: [],
  isHigh: null,

  shouldAlert: function(average) {
    if ( !this.isHigh ) { // Either set to false, or unset at beginning.
      return average >= 1 ? true : false;
    } else {
      return average >= 1 ? false : true;
    }
  },

  createMessage: function(average) {
    var message,
      now = moment(),
      timestamp = now.format('YYYY-MM-DD HH:mm:ss Z');

    if ( !this.isHigh ) { // Either set to false, or unset at beginning.
      message = "High load generated an alert - load = " + average + ", triggered at " + timestamp;
    } else {
      message = "High load alert suspended - load = " + average + ", triggered at " + timestamp;
    }
    this.messages.push(message);

  },

  clearMessages: function() {
    this.messages = [];
    this.isHigh = null;
  },

  getMessages: function(average) {
    var shouldAlert = this.shouldAlert(average);

    if ( shouldAlert === true ) {
      this.createMessage(average);
      this.isHigh = !this.isHigh;
    }
    return this.messages;
  }
}

module.exports = Message;