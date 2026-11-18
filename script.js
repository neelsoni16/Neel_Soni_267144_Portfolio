// Feature 1: open/close the menu on mobile
var menuBtn = document.getElementById("menu-btn");
var navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", function () {
  navMenu.classList.toggle("open");
});

// Feature 2: dark mode button
var themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "Light Mode";
  } else {
    themeBtn.textContent = "Dark Mode";
  }
});

// Feature 3: check the contact form before submitting
var form = document.getElementById("contact-form");
var formMsg = document.getElementById("form-msg");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    formMsg.textContent = "Please fill in all fields.";
    formMsg.style.color = "red";
  } else if (!email.includes("@") || !email.includes(".")) {
    formMsg.textContent = "Please enter a valid email.";
    formMsg.style.color = "red";
  } else {
    formMsg.textContent = "Thanks, " + name + "! Your message was sent.";
    formMsg.style.color = "green";
    form.reset();
  }
});
