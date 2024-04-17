// dashboard.js

document.addEventListener('DOMContentLoaded', function() {
    displayUserInfo();
  });
  
  function displayUserInfo() {
    var userInfoDiv = document.getElementById('userInfo');
    var users = JSON.parse(sessionStorage.getItem('users')) || [];
    var userInfoHTML = `
      <table border="1">
        <tr>
          <th>Full Name</th>
          <th>Email</th>
          <th>Mobile No</th>
          <th>Actions</th>
        </tr>
    `;
  
    users.forEach(function(user) {
      userInfoHTML += `
        <tr>
          <td id="fullName">${user.fullName}</td>
          <td id="email">${user.email}</td>
          <td id="mobileNo">${user.mobileNo}</td>
          <td>
            <button onclick="updateUser('${user.email}', '${user.fullName}', '${user.mobileNo}')">Update</button>
            <button onclick="deleteUser('${user.email}')">Delete</button>
          </td>
        </tr>
      `;
    });
  
    userInfoHTML += `
      </table>
    `;
  
    userInfoDiv.innerHTML = userInfoHTML;
  }
  
  function updateUser(email, fullName, mobileNo, password) {
    var newFullName = prompt("Enter new Full Name", fullName);
    var newMobileNo = prompt("Enter new Mobile No", mobileNo);
    
    
    if (newFullName && newMobileNo) {
      // Retrieve users from session storage
      var users = JSON.parse(sessionStorage.getItem('users')) || [];
      
      // Find the user index with the provided email
      var userIndex = users.findIndex(function(user) {
        return user.email === email;
      });
  
      if (userIndex !== -1) {
        // Update user information
        users[userIndex].fullName = newFullName;
        users[userIndex].mobileNo = newMobileNo;
        
        // Save the updated users array back to session storage
        sessionStorage.setItem('users', JSON.stringify(users));
        
        // Reload the page to reflect the changes
        location.reload();
      } else {
        alert("User not found!");
      }
    }
  }
  
  function deleteUser(email) {
    if (confirm("Are you sure you want to delete this user?")) {
      // Retrieve users from session storage
      var users = JSON.parse(sessionStorage.getItem('users')) || [];
      
      // Filter out the user with the provided email
      var updatedUsers = users.filter(function(user) {
        return user.email !== email;
      });
      
      // Save the updated users array back to session storage
      sessionStorage.setItem('users', JSON.stringify(updatedUsers));
      
      // Reload the page to reflect the changes
      location.reload();
    }
  }
  