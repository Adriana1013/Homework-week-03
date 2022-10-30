// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numSym = ["0","1","2","3","4","5","6","7","8","9"];
var specialSym = ["!","@","#","$","%","^","&","*","+","="];

// Empty array
var tempPassword = [];
var yourPassword = [];

function generatePassword(){
  var passwordLength = window.prompt("Enter a password length between 8 and 128 characters")
  if (passwordLength > 8 && passwordLength < 128)
  var lowercaseLetters = window.confirm ("Would you like to include lowercase letters?")
  var uppercaseLetters = window.confirm("Would you like to include uppercase letters?")
  var numericSymbols = window.confirm("Would you like to include numeric symbols?")
  var specialCharacters = window.confirm("Would you like to include special characters?")
  
  if (lowercaseLetters) tempPassword = tempPassword.concat(lowerCase);
  if (uppercaseLetters) tempPassword = tempPassword.concat(upperCase);
  if (numericSymbols) tempPassword = tempPassword.concat(numSym);
  if (specialCharacters) tempPassword = tempPassword.concat(specialSym);

// for loop
for (var i = 0; i < passwordLength; i++) {
  var list = getPassLength(tempPassword.length)
  var charLength = tempPassword[list];
  yourPassword.push(tempPassword[list]);
 }

  return yourPassword.join("");
}

function getPassLength(max){
  return Math.floor(Math.random() * Math.floor(max));
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  