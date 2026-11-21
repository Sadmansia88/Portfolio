// ===== Shared JavaScript for all pages =====

// 1) Mobile menu toggle
var toggleBtn = document.getElementById("navToggle");
var navList = document.getElementById("navList");
if (toggleBtn && navList) {
  toggleBtn.addEventListener("click", function () {
    var isOpen = navList.classList.toggle("open");
    toggleBtn.setAttribute("aria-expanded", isOpen);
  });
}

// 2) Auto-update the year in the footer
var yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// 3) Contact form validation (only runs on contact.html)
var form = document.getElementById("contactForm");
if (form) {
  var showError = function (input, message) {
    var box = document.getElementById(input.id + "Error");
    if (box) box.textContent = message;
    input.classList.toggle("field-invalid", message !== "");
  };

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop the page from reloading
    var valid = true;

    var nameInput = document.getElementById("fullName");
    var emailInput = document.getElementById("email");
    var topicInput = document.getElementById("topic");
    var msgInput = document.getElementById("message");

    // name: at least 2 characters
    if (nameInput.value.trim().length < 2) {
      showError(nameInput, "Please enter your full name.");
      valid = false;
    } else {
      showError(nameInput, "");
    }

    // email: simple pattern check
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      showError(emailInput, "Please enter a valid email address.");
      valid = false;
    } else {
      showError(emailInput, "");
    }

    // dropdown must be chosen
    if (topicInput.value === "") {
      showError(topicInput, "Please choose a topic.");
      valid = false;
    } else {
      showError(topicInput, "");
    }

    // message: at least 10 characters
    if (msgInput.value.trim().length < 10) {
      showError(msgInput, "Message should be at least 10 characters.");
      valid = false;
    } else {
      showError(msgInput, "");
    }

    if (valid) {
      form.classList.add("hidden");
      document.getElementById("formSuccess").classList.remove("hidden");
    }
  });
}
