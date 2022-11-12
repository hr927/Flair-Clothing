// Get data function for getting the wishlist tems from server
const getData = async () => {
  try {
    let res = await fetch(
      `https://infinite-fortress-00447.herokuapp.com/wishlist/`
    );
    let data = await res.json();
    // console.log("data:", data);
    appendData(data);
  } catch (err) {
    console.log(err);
  }
};
import navbar from "../Components/navbar.js";
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

import footer from "../Components/footer.js";
let footer_div = document.getElementById("footer");
footer_div.innerHTML = footer();

// checking if logged in

let loggedIn = JSON.parse(localStorage.getItem("loggedin"));
if (loggedIn) {
  document.querySelector("#default").style.display = "none";
  document.querySelector("#loggedIn").style.display = "flex";
} else {
  document.querySelector("#default").style.display = "flex";
  document.querySelector("#loggedIn").style.display = "none";
}
let signInBtn = document.querySelector("#signin");
signInBtn.onclick = () => {
  mySign();
};

const mySign = () => {
  window.location.href = "Sign_in.html";
};
let inspire = document.querySelector("#getInspired");
inspire.onclick = () => {
  getInspire();
};

const getInspire = () => {
  window.location.href = "productPage.html";
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
getData();
let prodSizes = ["XS", "S", "M", "L", "XL"];
// let logIn = false;
// let defaultDiv = document.querySelector("#default");
// let userDiv = document.querySelector("#loggedIn");
// if (logIn === false) {
//   userDiv.style.display = "none";
// } else {
//   defaultDiv.style.display = "none";
// }
// function to append data on DOM
const appendData = (arr) => {
  let wishmessage = document.querySelector("#wishMessage");
  let wishcount = document.querySelector("#wishCount");
  if (arr.length > 0) {
    wishmessage.innerText =
      "Keep track of your favorite pieces no matter the browser or device, all in one place";
  }
  if (arr.length === 1) {
    wishcount.setAttribute("class", "wishcountclass");
    wishcount.innerText = arr.length + " PIECE";
  } else if (arr.length >= 1) {
    wishcount.setAttribute("class", "wishcountclass");
    wishcount.innerText = arr.length + " PIECES";
  }
  let container = document.querySelector("#container");
  container.innerHTML = null;
  if (arr.length < 5) {
    container.style.gridTemplateColumns = `repeat(${arr.length}, 1fr)`;
  } else {
    container.style.gridTemplateColumns = `repeat(4,1fr)`;
  }

  arr.forEach((el) => {
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    let removeBtn = document.createElement("button");
    removeBtn.innerHTML =
      '<img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png" alt="">';
    removeBtn.setAttribute("class", "removeBtn");
    removeBtn.addEventListener("click", () => {
      removeProduct(el);
    });
    let prodImage = document.createElement("img");
    prodImage.src = el.image_url[0];
    let prodSeason = document.createElement("div");
    prodSeason.innerText = el.seasons;
    prodSeason.setAttribute("class", "prodSeason");
    let prodName = document.createElement("div");
    prodName.innerText = el.name;
    prodName.setAttribute("class", "prodName");
    let prodDesc = document.createElement("div");
    prodDesc.innerText = el.description;
    prodDesc.setAttribute("class", "prodDesc");
    let prodPrice = document.createElement("div");
    prodPrice.innerText = "$" + el.price;
    prodPrice.setAttribute("class", "prodPrice");
    // let prodSize = document.createElement("select");
    // prodSize.options = prodSizes.forEach((el) => {
    //   return el;
    // });
    let addBtn = document.createElement("button");
    addBtn.innerText = "Add To Bag";
    addBtn.setAttribute("class", "addToBag");
    addBtn.addEventListener("click", () => {
      addtoCart(el);
    });
    card.append(
      removeBtn,
      prodImage,
      prodSeason,
      prodName,
      prodDesc,
      prodPrice,
      addBtn
    );
    container.append(card);
  });
};

// function to remove product from the wishlist
const removeProduct = async (el) => {
  try {
    let id = el.id;
    let res = await fetch(
      `https://infinite-fortress-00447.herokuapp.com/wishlist/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // let data = await res.json();
    // console.log("data:", data);
    // appendData(data);
    getData();
  } catch (err) {
    console.log(err);
  }
};

// function to add product to cart and remove it from wishlist once added to cart
const addtoCart = async (el) => {
  try {
    let send_data = el;
    console.log(send_data);
    let res = await fetch(
      `https://infinite-fortress-00447.herokuapp.com/cart`,
      {
        method: "POST",
        body: JSON.stringify(send_data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let data = await res.json();
    console.log("data:", data);
    // removeProduct(send_data);
  } catch (err) {
    console.log(err);
  }
};
