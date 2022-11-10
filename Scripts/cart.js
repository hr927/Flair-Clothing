let defaultDiv = document.querySelector("#default");
let wishDiv = document.querySelector("#fromWish");
let cartDiv = document.querySelector("#cartContainer");

// Get cart data function for getting the cart items from server
const getCart = async () => {
  try {
    let res = await fetch(`https://infinite-fortress-00447.herokuapp.com/cart`);
    let data = await res.json();
    // console.log("data:", data);
    if (data.length === 0) {
      cartDiv.style.display = "none";
    } else {
      defaultDiv.style.display = "none";
      //   appendCart(data);
    }
  } catch (err) {
    console.log(err);
  }
};
getCart();
// Get data function for getting the wishlist items from server
const getData = async () => {
  try {
    let res = await fetch(
      `https://infinite-fortress-00447.herokuapp.com/wishlist/`
    );
    let data = await res.json();
    console.log("data:", data);
    if (data.length === 0) {
      wishDiv.style.display = "none";
    } else {
      appendData(data);
    }
  } catch (err) {
    console.log(err);
  }
};
getData();

// function to append data on DOM
const appendData = (arr) => {
  let container = document.querySelector("#wishContainer");
  container.innerHTML = null;
  if (arr.length < 5) {
    container.style.gridTemplateColumns = `repeat(${arr.length}, 1fr)`;
  } else {
    container.style.gridTemplateColumns = `repeat(4,1fr)`;
  }
  arr.forEach((el) => {
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    let prodImage = document.createElement("img");
    prodImage.src = el.image_url[0];
    let prodName = document.createElement("div");
    prodName.innerText = el.name;
    prodName.setAttribute("class", "prodName");
    let prodDesc = document.createElement("div");
    prodDesc.innerText = el.description;
    prodDesc.setAttribute("class", "prodDesc");
    let prodPrice = document.createElement("div");
    prodPrice.innerText = "$" + el.price;
    prodPrice.setAttribute("class", "prodPrice");

    card.append(prodImage, prodName, prodDesc, prodPrice);
    container.append(card);
  });
};

// User data base on LS
let fcUser = JSON.parse(localStorage.getItem("fcUser")) || [];

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
