// functions
String.prototype.replaceAt = function (index, replacement) {
  return (
    this.substring(0, index) +
    replacement +
    this.substring(index + replacement.length)
  );
};

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  const sets = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"];
const safeNumber = (num, mod) => ((num % mod) + mod) % mod;

function rot(msg, num) {
  let ret = "";
  for (let i = 0; i < msg.length; i++) {
    let add = msg[i];
    for (let j = 0; j < sets.length; j++)
      if (sets[j].indexOf(msg[i]) !== -1)
        add =
          sets[j][safeNumber(sets[j].indexOf(msg[i]) + num, sets[j].length)];
    ret += add;
  }
  return ret;
}
// functions end

var index = 0;
const text = "\n\"I like singing!\" \"I like dancing!\" \"I like trains.\" *gets hit by a train*\n\"Got your nose!\" \"Look out, he\'s got a nose!\" *gunshots*\n\"Hello, parking meter!\" \"Hello!\"\n";
function upperCase() {
  const selectInputMode = document.getElementById("selectInputMode");
  const inputField = document.getElementById("inputField");
  if (inputField.value.charAt(index) == "") {
    index--;
  } else {
    console.log(selectInputMode.value);
    switch (selectInputMode.value) {
      case 'cursed':
        inputField.value = inputField.value.replaceAt(
          index,
          String.fromCharCode(Number(inputField.value.charCodeAt(index)) + getRandomArbitrary(-2,3))
        );
        break;
      case 'asdf':
        inputField.value = inputField.value.replaceAt(index, text.charAt(index));
        break;
      case 'rot':
        inputField.value = inputField.value.replaceAt(index, rot(inputField.value.charAt(index)), 123);
        }
    index++;
    console.log(index);
  }
}
