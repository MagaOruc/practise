let form = document.querySelector("form");

let allInputs = document.querySelectorAll(".form-control");
let login = document.querySelector(".login");

let userData = JSON.parse(localStorage.getItem("data")) ?? [];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let users = {
    name: allInputs[0].value,
    email: allInputs[1].value,
    password: allInputs[2].value,
  };
  //   console.log("worked");

  userData.push(users);

  localStorage.setItem("data", JSON.stringify(userData));
});

login.addEventListener("click", function () {
  window.location.href = "http://127.0.0.1:5500/login.html#";
});
