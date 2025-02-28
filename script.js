const registerLink = document.getElementById("register-link");
const loginLink = document.getElementById("login-link");
const loginForm = document.querySelector(".form-box.login");
const registerForm = document.querySelector(".form-box.register");
const loginBtn = document.querySelector(".login-btn");
const registerBtn = document.querySelector(".register-btn");
const loginUsername = loginForm.querySelector("input[type='text']");
const registerUsername = registerForm.querySelector("input[type='text']");

loginBtn.addEventListener("click", () => {
  const username = loginUsername.value.trim();
  if (username) {
    alert(`Welcome, ${username}!`);
  } else {
    alert("Please enter your username.");
  }
});

registerBtn.addEventListener("click", () => {
  const username = registerUsername.value.trim();
  if (username) {
    alert(`Congratulations, ${username}! Your registration is successful!`);
    loginForm.classList.remove("translate-x-[-180%]");
    registerForm.classList.add("translate-x-full");
  } else {
    alert("Please enter a username.");
  }
});

registerLink.addEventListener("click", () => {
  loginForm.classList.add("translate-x-[-180%]");
  registerForm.classList.remove("translate-x-full");
});

loginLink.addEventListener("click", () => {
  loginForm.classList.remove("translate-x-[-180%]");
  registerForm.classList.add("translate-x-full");
});
