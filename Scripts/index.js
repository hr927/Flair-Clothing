import navbar from "../Components/navbar.js";
let navdiv=document.querySelector("#navbar")
navdiv.innerHTML=navbar()
import footer from "../Components/footer.js";
let footerdiv = document.querySelector("#footer");
footerdiv.innerHTML=footer();

// Bottom section reusable
import bottom from "../Components/bottom.js";
let bottomDiv = document.querySelector("#bottomSec");
bottomDiv.innerHTML = bottom();

// Gender Buttons functionality
let female = document.querySelector("#womensWear");
let male = document.querySelector("#mensWear");
female.onclick = () => {
  male.checked = false;
};
male.onclick = () => {
  female.checked = false;
};

// SignUp button
let signUpBtn = document.querySelector("#botSignUp");
signUpBtn.onclick = () => {
  botSignUp();
};
// Checkbox for email and number
let emailBtn = document.querySelector("#botEmailcheck");
let phoneBtn = document.querySelector("#botSmscheck");
let userEmail = document.querySelector("#botEmail");
let userPhone = document.querySelector("#phnNum");
phoneBtn.onclick = () => {
  showNum();
};
emailBtn.onclick = () => {
  showEmail();
};

// to show the email input box
const showEmail = () => {
  if (emailBtn.checked === true) {
    userEmail.setAttribute("class", "show");
  }
  if (emailBtn.checked === false) {
    userEmail.setAttribute("class", "hide");
  }
};

// to show the number input box
const showNum = () => {
  if (phoneBtn.checked === true) {
    userPhone.setAttribute("class", "show");
  }
  if (phoneBtn.checked === false) {
    userPhone.setAttribute("class", "hide");
  }
};

// function to be called when clicked on bottom Sign UP button
const botSignUp = () => {
  let email = document.querySelector("#botEmail").value;
  let phoneNum = document.querySelector("#botPhone").value;
  let userObj = {
    name,
    email,
    phone: phoneNum,
  };
  if (emailBtn.checked === true && phoneBtn.checked === false) {
    if (email === "") {
      alert("Please enter your Email");
    } else {
      fcUser.push(userObj);
      localStorage.setItem("fcUser", JSON.stringify(fcUser));
      alert(
        "You're on the list! \n You can update your preferences in your account"
      );
    }
  } else if (phoneBtn.checked === true && emailBtn.checked === false) {
    if (phoneNum === "") {
      alert("Please enter your number");
    } else {
      fcUser.push(userObj);
      localStorage.setItem("fcUser", JSON.stringify(fcUser));
      alert(
        "You're on the list! \n You can update your preferences in your account"
      );
    }
  } else if (emailBtn.checked === true && phoneBtn.checked === true) {
    if (email === "" || phoneNum === "") {
      alert("Please enter all the details");
    } else {
      fcUser.push(userObj);
      localStorage.setItem("fcUser", JSON.stringify(fcUser));
      alert(
        "You're on the list! \n You can update your preferences in your account"
      );
    }
  }
};