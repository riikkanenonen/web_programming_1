var input = require("readline-sync");
var sana = input.question("Anna sana: ");

function onkoPalindromi(sana) {
  var sanaVaarinpain = "";
  for (var i = 0; i < sana.length; i++) {
    sanaVaarinpain = sana[i] + sanaVaarinpain;
  }

  if (sana === sanaVaarinpain) {
    return true; // `Jee! Sana "${sana}" on palindromi!`;
  } else {
    return false; // `O-ou, sana "${sana}" ei ole palindromi.`;
  }
}

console.log(onkoPalindromi(sana));
