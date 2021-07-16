// Assignment Code
//Global variables

var generateBtn = document.querySelector("#generate");
var passwordLength;
var bank = "";
var lowercaseBank = "qwertyuiopasdfghjklzxcvbnm";
var uppercaseBank = lowercaseBank.toUpperCase();
var numbersBank = "0123456789";
var specialCharBank = "~!@#$%^&*()_+";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// prompt
var generatePassword = function () {
  var password = "";
  passwordLength = getPasswordLength();
  
  //Prompt the user for types of characters to include in password
  getLowerCase();
  getUpperCase();
  getNumbers();
  getSpecialChar();
  checkCharsBank();
  
  var bankArray = bank.split("");
  console.log(bankArray);

  for (var i = 0; i < passwordLength ; i++) {
    randIndex = Math.floor(Math.random() * bankArray.length)
    password += bankArray[randIndex];
  }
  bank = '';
  return password;
}
