// create password questions function
passwordQuestion();

function passwordQuestion() {
  //prompt for password length
  var passwordLength = parseInt(prompt("How many characters for your password?"));
  if (isNaN(passwordLength)===true) {
    alert("Must enter a number to generate password!!!");
    return;
  }
  if (passwordLength > 128) {
    alert("Password must be less than 128 characters");
    return;
  }
  if (passwordLength < 8) {
    alert("Password must be greater than 8 characters");
    return;
  }

  //alert with answer
  
  //confirms for true or false questions
  //alert after each 
}

// var testq = prompt("whats your favorite color?")

// possible paassword values
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var symbols = "!@#$%^&*()_+";

//values to store password
var letters = "";
var displayPassword = "";
var createPassword = "";

//prompts for creating password
var up = confirm("Uppercase?");
var low = confirm("Lowercase?");
var symb = confirm("Symbols?");
var num = confirm("Numbers?");

// if statements for password type
if (up) {
letters += uppercase;
createPassword += getRandomCharacters(uppercase);
}

if (low) {
  letters += lowercase;
  createPassword += getRandomCharacters(lowercase);
}

if (num) {
  letters += numbers;
  createPassword += getRandomCharacters(numbers);
}

if (symb) {
  letters += symbols;
  createPassword += getRandomCharacters(symbols);
}

displayPassword += createPassword;

for(var i = 0; i < length - letters.length; i++) {
  var randomPassword = getRandomint(characters.length);
  displayPassword += characters.charAt(randomPassword);
}

// function for writing password
function writePassword() {
  var password = generatePassword();
  var textPassword = document.querySelector("#password");

  if (password !== undefined) {
    textPassword.value = password;
  }
}


