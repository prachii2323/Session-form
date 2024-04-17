// login.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Retrieve users from session storage
    var users = JSON.parse(sessionStorage.getItem('users')) || [];
  
    // Find the user with the provided email and password
    var foundUser = users.find(function(user) {
      return user.email === email && user.password === password;
    });
  
    if (foundUser) {
      alert('Login successful!');
      // Redirect to the dashboard page
      window.location.href = "dashboard.html";
    } else {
      alert('Invalid email or password. Please try again.');
    }
  });
  