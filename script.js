const firstNameInput = document.querySelector("#first-name-input"),
  lastNameInput = document.querySelector("#last-name-input"),
  emailInput = document.querySelector("#email-input"),
  passwordInput = document.querySelector("#password-input"),
  submitBtn = document.querySelector("#submit-btn");

//simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
};

firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};

lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};

emailInput.onkeyup = () => {
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
};

passwordInput.onkeyup = () => {
  passwordInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");
};

submitBtn.onclick = () => {
  isFirstNameOk = !1;
  isLastNameOk = !1;
  isEmailOk = !1;
  isPasswordOk = !1;

  if (firstNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = !0;
  };

  if (lastNameInput.value === "") {
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
    isLastNameOk = !0;
  };

  if (validateEmail(emailInput.value) === !1) {
    emailInput.classList.add("is-invalid");
  } else {
    emailInput.classList.add("is-valid");
    isEmailOk = !0;
  };

  if (passwordInput.value.length >= 6) {
    passwordInput.classList.add("is-valid");
    isPasswordOk = !0;
  } else {
    passwordInput.classList.add("is-invalid");
  };

  isFirstNameOk && isLastNameOk && isEmailOk && isPasswordOk && alert("Registered successfully");
};
