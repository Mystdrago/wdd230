// Event listener for form submission
document.getElementById('myForm').addEventListener('submit', validateForm);

// Function to validate form and redirect on successful submission
function validateForm(event) {
  event.preventDefault(); // Prevent default form submission
  
  // Validate Passwords
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;
  
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    document.getElementById('password').value = '';
    document.getElementById('confirmPassword').value = '';
    return false; // Prevent form submission
  }
  
  // Validate Email (BYUI domain)
  var email = document.getElementById('email').value;
  var emailPattern = /^[a-zA-Z0-9._%+\-]+@byui\.edu$/;
  
  if (!emailPattern.test(email)) {
    alert("Please enter a valid @byui.edu email address");
    return false; // Prevent form submission
  }
  
  // Redirect to confirmation page
  window.location.href = "https://mystdrago.github.io/wdd230/record";
}