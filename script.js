const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const generateBtn = document.getElementById("generateBtn");

function generatePassword(length, includeNumbers, includeSymbols) {
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let numbers = "0123456789";
  let symbols = "!@#$%^&*()_-=+{}[]<>?";

  let characters = letters;

  if (includeNumbers) characters += numbers;
  if (includeSymbols) characters += symbols;

  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  return password;
}

function createPasswords() {
  let length = document.getElementById("lengthInput").value;
  let includeNumbers = document.getElementById("includeNumbers").checked;
  let includeSymbols = document.getElementById("includeSymbols").checked;

  password1.textContent = generatePassword(
    length,
    includeNumbers,
    includeSymbols
  );
  password2.textContent = generatePassword(
    length,
    includeNumbers,
    includeSymbols
  );
}

generateBtn.addEventListener("click", createPasswords);

// Copy-on-click
password1.addEventListener("click", () => {
  navigator.clipboard.writeText(password1.textContent);
  alert("Password Copied!");
});

password2.addEventListener("click", () => {
  navigator.clipboard.writeText(password2.textContent);
  alert("Password Copied!");
});

// Generate two default 15-char passwords on load
window.onload = () => {
  document.getElementById("lengthInput").value = 15;
  createPasswords();
};
