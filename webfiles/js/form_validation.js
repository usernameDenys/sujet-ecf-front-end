const form = document.querySelector("#contact-us form");
const lastNameField = form.querySelector('input[name="lastname"]');
const firstNameField = form.querySelector('input[name="firstname"]');
const emailField = form.querySelector('input[name="mail"]');
const objectField = form.querySelector('input[name="object"]');
const messageField = form.querySelector('textarea[name="message"]');
const checkbox = form.querySelector("#agreed");
const submitButton = form.querySelector('button[type="submit"]');

const setError = (element) => {
  element.classList.add("invalid");
  element.classList.remove("valid");
};

const setSuccess = (element) => {
  element.classList.add("valid");
  element.classList.remove("invalid");
};

const isValidEmail = (email) => {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
};

const validateInput = () => {
  const lastName = lastNameField.value.trim();
  const firstName = firstNameField.value.trim();
  const email = emailField.value.trim();
  const object = objectField.value.trim();
  const message = messageField.value.trim();
  let isValid = true;

  if (!/^[A-Za-zÀ-ÿ\s-]{2,50}$/.test(lastName)) {
    setError(lastNameField);
    isValid = false;
  } else {
    setSuccess(lastNameField);
  }

  if (!/^[A-Za-zÀ-ÿ\s-]{2,50}$/.test(firstName)) {
    setError(firstNameField);
    isValid = false;
  } else {
    setSuccess(firstNameField);
  }

  if (!isValidEmail(email)) {
    setError(emailField);
    isValid = false;
  } else {
    setSuccess(emailField);
  }

  if (object.length < 3 || object.length > 250) {
    setError(objectField);
    isValid = false;
  } else {
    setSuccess(objectField);
  }

  if (message.length < 3 || message.length > 250) {
    setError(messageField);
    isValid = false;
  } else {
    setSuccess(messageField);
  }

  return isValid;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (validateInput() && checkbox.checked) {
    alert("Form submitted successfully");
    form.reset();
    form.querySelectorAll(".valid, .invalid").forEach((element) => {
      element.classList.remove("valid", "invalid");
    });
  }
});

const formFields = [
  lastNameField,
  firstNameField,
  emailField,
  objectField,
  messageField,
];

function handleFieldChange() {
  validateInput();
  updateSubmitButton();
}

formFields.forEach((field) => {
  field.addEventListener("blur", handleFieldChange);
  field.addEventListener("input", handleFieldChange);
});

checkbox.addEventListener("change", updateSubmitButton);

function updateSubmitButton() {
  submitButton.disabled = !checkbox.checked || !validateInput();
}

updateSubmitButton();
