

// scripts/validateForm.js

document.addEventListener('DOMContentLoaded', function() {
  // Password validation
  const confirmPasswordInput = document.getElementById('confirm-password');
  const passwordInput = document.getElementById('password');
  const passwordMessage = document.getElementById('password-message');

  confirmPasswordInput.addEventListener('input', function() {
    if (confirmPasswordInput.value !== passwordInput.value) {
      passwordMessage.textContent = "Passwords do not match!";
    } else {
      passwordMessage.textContent = "";
    }
  });

  // Set the timestamp
  const timestampInput = document.getElementById('timestamp');
  timestampInput.value = new Date().toISOString();
});
  