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

var getPasswordLength = function () {
  passwordLength = prompt("Enter a password length");
  if (passwordLength < 8 || passwordLength > 128) {
    getPasswordLength();
  }
  else {
    return passwordLength;
  }
}

var getLowerCase = function () {
  if (confirm("Would you like to include lowercase characters?")) {
    bank += lowercaseBank;
  }
}

var getUpperCase = function () {
  if (confirm("Would you like to include uppercase characters?")) {
    bank += uppercaseBank;
  }
}

var getNumbers = function () {
  if (confirm("Would you like to include numbers?")) {
    bank += numbersBank;
  }
}

var getSpecialChar = function () {
  if (confirm("Would you like to include special characters?")) {
    bank += specialCharBank;
  }
}