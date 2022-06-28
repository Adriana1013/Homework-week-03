// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split('');

function generatePassword(){
  var passwordLength = window.prompt("Enter a password length")
  console.log(passwordLength)
  var lowercaseLetters = window.confirm ("Would you like to include lowercase letters?")
  console.log(lowercaseLetters)
  var uppercaseLetters = window.confirm("Would you like to include uppercase letters?")
  console.log(uppercaseLetters)
  var numericSymbols = window.confirm("Would you like to include numeric symbols?")
  console.log(numericSymbols)
  var specialCharacters = window.confirm("Would you like to include special characters?")
  console.log(specialCharacters)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  