let defaultDiv = document.querySelector("#default");
let wishDiv = document.querySelector("#fromWish");
let cartDiv = document.querySelector("#cartContainer");
let checkOutBtn = document.querySelector("#checkOut");

let cartPrice = JSON.parse(localStorage.getItem("cartPrice")) || {};
checkOutBtn.onclick = () => {
  window.location.href = "address.html";
};

import navbar from "../Components/navbar.js";
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

import footer from "../Components/footer.js";
let footer_div = document.getElementById("footer");
footer_div.innerHTML = footer();

let loggedIn = JSON.parse(localStorage.getItem("loggedin"));
let continueBtn = document.querySelector("#checkOut");

continueBtn.onclick = () => {
  myFunc();
};
const myFunc = () => {
  if (loggedIn) {
    window.location.href = "address.html";
  } else {
    alert("Please login first");
  }
};
// Get cart data function for getting the cart items from server
const getCart = async () => {
  try {
    let res = await fetch(`https://infinite-fortress-00447.herokuapp.com/cart`);
    let data = await res.json();
    // console.log("data:", data);
    if (data.length === 0) {
      cartDiv.style.display = "none";
    } else if (data.length > 0) {
      defaultDiv.style.display = "none";
      appendCart(data);
    }
  } catch (err) {
    console.log(err);
  }
};
getCart();

// Append Cart function to append cart data from server
let subtotal = 0;
const appendCart = (arr) => {
  let pContainer = document.querySelector("#productContainer");
  pContainer.innerHTML = null;

  arr.forEach((el) => {
    let prodDiv = document.createElement("div");
    prodDiv.setAttribute("id", "pCartdiv");
    let prodImgDiv = document.createElement("div");
    prodImgDiv.setAttribute("id", "pCartImg");
    let prodImg = document.createElement("img");
    prodImg.src = el.image_url[0];
    prodImgDiv.append(prodImg);
    let prodDescDiv = document.createElement("div");
    prodDescDiv.setAttribute("id", "pDesc");
    let prodSeason = document.createElement("p");
    prodSeason.innerText = el.seasons;
    let prodName = document.createElement("p");
    prodName.innerText = el.name;
    let prodId = document.createElement("p");
    prodId.innerText = el.productId;
    prodDescDiv.append(prodSeason, prodName, prodId);
    let prodPriceDiv = document.createElement("div");
    prodPriceDiv.setAttribute("id", "pPriceDiv");
    let prodPrice = document.createElement("p");
    prodPrice.innerText = "$" + +el.price;
    console.log("price:", el.price);

    let importDuty = document.createElement("p");
    importDuty.innerText = "(Import duties included)";
    prodPriceDiv.append(prodPrice, importDuty);
    let quantdiv = document.createElement("div");
    quantdiv.setAttribute("id", "pQuantDiv");
    let prodquant = document.createElement("input");
    prodquant.setAttribute("id", "prodQuant");
    prodquant.setAttribute("type", "number");
    prodquant.setAttribute("max", "2");
    prodquant.setAttribute("min", "1");
    prodquant.setAttribute("id", "prodQuant");
    prodquant.setAttribute("value", "1");
    console.log("prodquant:", prodquant.value);

    let pqaunt = document.createElement("p");
    pqaunt.innerText = "Quantity";
    quantdiv.append(pqaunt, prodquant);
    subtotal += +el.price * +prodquant.value;
    console.log("subtotal:", subtotal);
    let removeBtn = document.createElement("button");
    removeBtn.innerHTML =
      '<img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png" alt="">';
    removeBtn.setAttribute("class", "removeBtn");
    removeBtn.addEventListener("click", () => {
      removeProduct(el);
    });
    prodDiv.append(prodImgDiv, prodDescDiv, prodPriceDiv, quantdiv, removeBtn);
    pContainer.append(prodDiv);
  });
  let stPrice = document.querySelector("#stprice");
  stPrice.innerText = subtotal;
  let delCharge = document.querySelector("#delCharge");
  delCharge.innerText = "$24";
  let totalPrice = document.querySelector("#tprice");
  totalPrice.innerText = subtotal + 24;

  cartPrice = {
    subPrice: subtotal,
    delivery: "24",
    total: subtotal + 24,
  };
  localStorage.setItem("cartPrice", JSON.stringify(cartPrice));
};

// function to remove product from cart
const removeProduct = async (el) => {
  try {
    let id = el.id;
    let res = await fetch(
      `https://infinite-fortress-00447.herokuapp.com/cart/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    window.location.reload();
    getCart();
  } catch (err) {
    console.log(err);
  }
};
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
