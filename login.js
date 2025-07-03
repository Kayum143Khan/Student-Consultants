function togglePassword() {
  const passwordInput = document.getElementById("password");
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
}

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // You can replace this with backend validation
  if (email === "admin@example.com" && password === "123456") {
    alert("Login successful!");
    // window.location.href = "dashboard.html";
  } else {
    alert("Invalid email or password.");
  }
});
