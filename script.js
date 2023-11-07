const emailForm = document.getElementById("emailForm");
const emailInput = document.getElementById("emailInput");
const errorText = document.getElementById("errorText");

emailForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailInputValue = emailInput.value.trim();
  const emailPattern = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z\d-]+)(\.[a-z\d-]+)?$/i;

  if (emailPattern.test(emailInputValue)) {
    errorText.style.display = "none";
  } else {
    errorText.style.display = "block";
  }
});
