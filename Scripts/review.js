let userDetails = JSON.parse(localStorage.getItem("userAddress"));
let cartPrice = JSON.parse(localStorage.getItem("cartPrice")) || {};
let subtotal = document.querySelector("#stprice");
let delivery = document.querySelector("#delCharge");
let total = document.querySelector("#tprice");
delivery.innerText = "$24";
subtotal.innerText = cartPrice.subPrice;
total.innerText = cartPrice.total;
const getCart = async () => {
  try {
    let res = await fetch(`https://infinite-fortress-00447.herokuapp.com/cart`);
    let data = await res.json();
    appendCart(data);
  } catch (err) {
    console.log(err);
  }
};
getCart();
const appendCart = (arr) => {
  let pContainer = document.querySelector("#prodContainer");
  pContainer.innerHTML = null;

  arr.forEach((el) => {
    let importDiv = document.createElement("div");
    importDiv.setAttribute("id", "importDiv");
    let countrymsg = document.createElement("div");
    let cmsg = document.createElement("p");
    let usa = document.createElement("span");
    usa.innerText = "United States";
    cmsg.innerHTML = "Sending from ";
    cmsg.append(usa);
    countrymsg.append(cmsg);
    let importduty = document.createElement("div");
    importduty.innerHTML = "Import duties are included.";
    importDiv.append(countrymsg, importduty);
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
    // console.log("price:", el.price);
    let importDuty = document.createElement("p");
    importDuty.innerText = "(Import duties included)";
    let arrive = document.createElement("div");
    arrive.setAttribute("id", "arrive");
    arrive.innerText = "Arrving between Nov 17 and Nov 21 ";
    prodPriceDiv.append(prodPrice, importDuty);
    prodDiv.append(prodImgDiv, prodDescDiv, arrive);
    pContainer.append(importDiv, prodDiv);
  });
};
const getAdd = (userObj) => {
  let sAdd = document.querySelector("#address");
  sAdd.innerHTML = null;

  let dadd = document.createElement("p");
  dadd.innerText = "DELIVERY ADDRESS";
  let name = document.createElement("p");
  name.innerText = userObj.fname + userObj.lname;
  let add = document.createElement("p");
  add.innerText =
    userObj.address +
    ", " +
    userObj.city +
    ", " +
    userObj.state +
    ", " +
    userObj.zip +
    " - " +
    userObj.country;
  let change = document.createElement("a");
  change.href = "address.html";
  change.innerText = "Change";

  sAdd.append(dadd, name, add, change);
};
getAdd(userDetails[0]);
