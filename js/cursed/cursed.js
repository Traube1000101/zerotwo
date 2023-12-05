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

var index = 0;
var text = "\n\"I like singing!\" \"I like dancing!\" \"I like trains.\" *gets hit by a train*\'\n\'Got your nose!\" \"Look out, he\'s got a nose!\" *gunshots*\n\"Hello, parking meter!\" \"Hello!\"\n";
function upperCase() {
  const x = document.getElementById("inputField");
  console.log(x.value.charAt(index) == "");

  if (x.value.charAt(index) == "") {
    index--;
  } else {
    x.value = x.value.replaceAt(
      index,
      String.fromCharCode(Number(x.value.charCodeAt(index)) + getRandomArbitrary(0,6))
    );
    x.value = x.value.replaceAt(index, text.charAt(index - 10));
    index++;
  }
  
  console.log(index);
}
