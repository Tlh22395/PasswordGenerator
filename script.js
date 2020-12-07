// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


// possible paassword values
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var symbols = "!@#$%^&*()_+";

// add password to textbox
function getPassword() {
    var getPassword = document.getElementById("password")
    getPassword.innerHTML = " ";
    var display = document.createElement("display");
    display.textContent = generatePassword();
    getPassword.appendChild(display); 

}

function writePassword(){
 // which checked attributes are allowed
  var allowed = " ";
  if(document.generated.uppercase.checked) {
    allowed += uppercase;
  }
  if(document.generated.lowercase.checked) {
    allowed += lowercase;
  }
  if(document.generated.numbers.checked) {
    allowed += numbers;
  }
  if(document.generated.symbols.checked) {
    allowed += symbols;
  }

  // add password thats generated
  var password = " ";
  var length = parseInt(document.generated.length.value);
  for(var i = 0; i < length; i++) {
    var random = Math.floor(Math.random() * allowed.length);
    password += allowed[random];
  }

  return password;

}