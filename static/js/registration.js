/*
*validating the user inputs
*/ 
const form = document.querySelector("#registration");
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent form submission

  const username = form.querySelector('input[name="username"]');
  const email = form.querySelector('input[name="email"]');
  const password = form.querySelector('input[name="password"]');

  let isValid = true;

  // validate username
  if (!username.value.trim()|| !isValidUsername(username.value)) {
    errorMessage.textContent = 'Please enter a valid username';
    isValid = false;
    username.style.borderColor = "red";
  }else{username.style.borderColor = "";}

  // validate email
  if (!email.value.trim() || !isValidEmail(email.value)) {
    errorMessage.textContent = 'Please enter a valid email';
    isValid = false;
    email.style.borderColor = "red";
  }else{email.style.borderColor = "";}
 
  // validate password
  if (!password.value.trim() || !isValidPassword(password.value)) {
    password.style.borderColor = "red";
    errorMessage.textContent = '!password should be least 8 characters long, contain a letter and a special character.';
    isValid = false;
  }else{password.style.borderColor = "";}
  //password.style.borderColor = "";
  if (isValid) {
    form.submit(); // submit the form if valid
  }
});

// function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
// function to validate username format
function isValidUsername(username) {
    // Username can contain only letters, numbers, underscores, and hyphens, and should be between 3 and 20 characters long
    const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;
    return usernameRegex.test(username);
}
// function to validate password format
function isValidPassword(password) {
    // Password should contain at least 8 characters, with at least one uppercase letter, one lowercase letter, one number, and one special character
    const passwordRegex = /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[a-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}
  