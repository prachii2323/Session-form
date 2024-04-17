// registration.js

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var mobileNo = document.getElementById('mobileNo').value;
    var password = document.getElementById('password').value;
    
    // Retrieve existing users from session storage or initialize an empty array
    var users = JSON.parse(sessionStorage.getItem('users')) || [];
    
    // Create a new user object
    var newUser = {
      fullName: fullName,
      email: email,
      mobileNo: mobileNo,
      password: password
    };
    
    // Add the new user to the users array
    users.push(newUser);
    
    // Save the updated users array back to session storage
    sessionStorage.setItem('users', JSON.stringify(users));
    
    alert('Registration successful!');
  });
  