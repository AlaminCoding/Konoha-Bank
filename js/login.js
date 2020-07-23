var user = {
  email: "admin",
  password: "admin",
};
var loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", function () {
  var userEmail = String(document.getElementById("userEmail").value);
  var userPass = String(document.getElementById("userPass").value);
  if (user.email == userEmail && user.password == userPass) {
    console.log("Matched");
    loginBtn.setAttribute("href", "account.html");
  } else {
    console.log("Not matched");
  }
});
