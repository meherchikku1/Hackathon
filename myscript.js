document.getElementById("signupLink").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signupForm").style.display = "block";
  });
  
  document.getElementById("recoveryLink").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("passwordRecoveryForm").style.display = "block";
  });
  
  document.getElementById("backToLoginLink").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("signupForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
  });
  
  document.getElementById("backToLoginLink2").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("passwordRecoveryForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
  });
  