var Message = require("./Message");

function alertAbove() {
  Message.clearMessages();
  var messages;
  var passed;
  messages = Message.getMessages(.5);
  messages = Message.getMessages(.6);
  messages = Message.getMessages(.7);
  messages = Message.getMessages(.8);
  messages = Message.getMessages(1.1);
  messages = Message.getMessages(1.2);

  // This should alert once.
  passed = messages.length === 1 ? "passed" : "failed";
  console.log("This test was: " + passed);
  console.log("messages: " + messages.toString());
}

function alertFallBelow() {
  Message.clearMessages();
  var messages;
  var passed;
  messages = Message.getMessages(.5);
  messages = Message.getMessages(.6);
  messages = Message.getMessages(.7);
  messages = Message.getMessages(.8);
  messages = Message.getMessages(1.1);
  messages = Message.getMessages(1.2);
  messages = Message.getMessages(.5);

  // This should alert twice.
  passed = messages.length === 2 ? "passed" : "failed";
  console.log("This test was: " + passed);
  console.log("messages: " + messages.toString());
}

alertAbove();
alertFallBelow();