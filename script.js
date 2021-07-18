// Assignment Code

// Global variables
// Banks were created for each set of characters: lowercase, uppercase, numbers, special characters 

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

var generatePassword = function () {
  var password = "";
  passwordLength = getPasswordLength();
  
  // Prompt the user for types of characters to be included in password
  
  getLowerCase();
  getUpperCase();
  getNumbers();
  getSpecialChar();
  checkCharsBank();
  
  // Create an array out of the bank of possible characters to be used in composing password 

  var bankArray = bank.split("");
  console.log(bankArray);

  // Run through the loop for the number of characters needed in the password

  for (var i = 0; i < passwordLength ; i++) {
    // A random number is generated between 0 and the length of the desires password 
    // The random number is used to index from the bank of desired characters
    
    randIndex = Math.floor(Math.random() * bankArray.length)
    password += bankArray[randIndex];
  }

  // The bank is cleared so a new password can be generated

  bank = '';
  return password;
}

var getPasswordLength = function () {
  // The user is prompted for a password length that is valid
  // Function is continually called until a valid input is received
  
  passwordLength = prompt("Enter a password length");
  
  if (passwordLength >= 8 && passwordLength <= 128) {
    return passwordLength;
  }
  else {
    alert("Please enter a valid length between 8 and 128.");
    getPasswordLength();
  }
}

var getLowerCase = function () {
  // Prompt user if they want lowercase letters
  
  if (confirm("Would you like to include lowercase characters?")) {
    bank += lowercaseBank;
  }
}

var getUpperCase = function () {
  // Prompt user if they want uppercase letters
  
  if (confirm("Would you like to include uppercase characters?")) {
    bank += uppercaseBank;
  }
}

var getNumbers = function () {
// Prompt user if they want numbers

  if (confirm("Would you like to include numbers?")) {
    bank += numbersBank;
  }
}

var getSpecialChar = function () {
// Prompt user if they want special characters

  if (confirm("Would you like to include special characters?")) {
    bank += specialCharBank;
  }
}

var checkCharsBank = function () {
  // Verify that the bank of usable characters is not empty
  // Function is continually called until a valid input is received
  
  if (bank === "") {
    alert("Please choose at least one character type!")
    generatePassword();
  }
}