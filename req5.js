// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
String.prototype.startsWith = function (string) {
  return this.substr(0, string.length) === string;
};

// https://developer.mozilla.org/en-US/docs/Web/API/console/assert
/* Test startsWith */
console.assert("hang the dj".startsWith("hang") == true);
console.assert("hang the dj".startsWith("Hang") == false);
console.assert("hang the dj".startsWith("I've got a room for rent") == false);
console.assert("hang the dj".startsWith("") == true);
console.assert("hang the dj".startsWith("hang the") == true);
console.assert("hang the dj".startsWith("han") == true);
console.assert("hang the dj".startsWith("hang t") == true);
console.assert("hang the dj".startsWith(42) == false);
console.assert("hang the dj".startsWith({ first: "Johnny" }) == false);


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
String.prototype.endsWith = function(string) {
  return this.substr(this.length - string.length, string.length) === string;
};

/* Test endsWith */
console.assert("hang the dj".endsWith("dj") == true);
console.assert("hang the dj".endsWith("panic on the streets") == false);
console.assert("hang the dj".endsWith("") == true);
console.assert("hang the dj".endsWith("the dj") == true);
console.assert("hang the dj".endsWith("e dj") == true);
console.assert("hang the dj".endsWith("j") == true);
console.assert("hang the dj".endsWith(42) == false);
console.assert("hang the dj".endsWith({ first: "Johnny" }) == false);
