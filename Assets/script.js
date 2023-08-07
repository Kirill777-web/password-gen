// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

function generatePassword() {
  const getPasswordCriteria = (message) => confirm(message);

  const passwordLength = parseInt(
    prompt('How many characters would you like your password to contain?')
  );
  while (
    !passwordLength ||
    isNaN(passwordLength) ||
    passwordLength < 8 ||
    passwordLength > 128
  ) {
    passwordLength = parseInt(
      prompt(
        'Please enter a valid password length between 8 and 128 characters:'
      )
    );
  }

  const useUppercase = getPasswordCriteria(
    'Would you like to include uppercase letters?'
  );
  const useLowercase = getPasswordCriteria(
    'Would you like to include lowercase letters?'
  );
  const useNumbers = getPasswordCriteria('Would you like to include numbers?');
  const useSpecialChars = getPasswordCriteria(
    'Would you like to include special characters?'
  );

  if (!(useUppercase || useLowercase || useNumbers || useSpecialChars)) {
    alert('Please select at least one criteria for your password.');
    return generatePassword();
  }

  const allChars = [
    useUppercase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '',
    useLowercase ? 'abcdefghijklmnopqrstuvwxyz' : '',
    useNumbers ? '0123456789' : '',
    useSpecialChars ? '!@#$%^&*()_+{}[]<>?' : '',
  ].join('');

  let generatedPassword = '';
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    generatedPassword += allChars.charAt(randomIndex);
  }
  return generatedPassword;
}
