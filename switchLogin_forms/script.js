document.addEventListener("DOMContentLoaded", function() {
    const switchToLoginBtn = document.getElementById("switch-to-login");
    const loginFormContainer = document.getElementById("login-form-container");
    const registrationForm = document.getElementById("registration-form");
  
    switchToLoginBtn.addEventListener("click", function() {
      registrationForm.style.display = "none";
      loginFormContainer.style.display = "block";
    });
  });