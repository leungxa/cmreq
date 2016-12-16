// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
String.prototype.stripHtml = function() {
  return this.replace(/<[^>]+>/g, "");
};

console.assert("<p>Shoplifters of the World <em>Unite</em>!</p>".stripHtml() == "Shoplifters of the World Unite!");
console.assert("1 &lt; 2".stripHtml() == "1 &lt; 2");
