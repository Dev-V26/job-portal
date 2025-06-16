// js/auth.js

function loginUser() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const role = document.getElementById("role").value;
  
    if (!email || !password || !role) {
      alert("All fields are required.");
      return false;
    }
  
    // Admin: fixed credentials check
    if (role === "admin") {
      if (email === "admin@jobportal.com" && password === "admin123") {
        localStorage.setItem("loggedInUser", "admin");
        window.location.href = "admin-dashboard.html";
      } else {
        alert("Invalid admin credentials.");
      }
      return false;
    }
  
    // User: Allow any credentials (simplified)
    if (role === "user") {
      localStorage.setItem("loggedInUser", email);
      window.location.href = "job-listings.html";
      return false;
    }
  
    return false;
  }
  