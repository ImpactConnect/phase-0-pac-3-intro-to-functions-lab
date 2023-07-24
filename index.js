function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}
whisper("HELLO");

function logShout(string) {
  const spy = string.toUpperCase();
  console.log(spy);
}
logShout("hello");

function logWhisper(string) {
  const toUpp = string.toLowerCase();
  console.log(toUpp);
}
logShout("HELLO");

function sayHiToHeadphonedRoommate(string) {
  if (string == string.toLowerCase()) {
    return "I can't hear you!";
  }
}
let rest = sayHiToHeadphonedRoommate("hello");
console.log(rest);

function sayHiToHeadphonedRoommate(string) {
  if (string == string.toUpperCase()) {
    return "YES INDEED!";
  }
}
let yesUpp = sayHiToHeadphonedRoommate("HELLO");
console.log(yesUpp);

function sayHiToHeadphonedRoommate(string) {
  if (string == "Let's have dinner together!") {
    console.log("I would love to!");
  }
}
sayHiToHeadphonedRoommate("Let's have dinner together!");
