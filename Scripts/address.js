let cartPrice = JSON.parse(localStorage.getItem("cartPrice")) || {};
let subtotal = document.querySelector("#stprice");
let delivery = document.querySelector("#delCharge");
let total = document.querySelector("#tprice");
delivery.innerText = "$24";
subtotal.innerText = cartPrice.subPrice;
total.innerText = cartPrice.total;
let form = document.querySelector("form");
let userDetails = JSON.parse(localStorage.getItem("userAddress")) || [];
let paymentBtn = document.querySelector("#checkOut");
paymentBtn.onclick = () => {
  myFunc();
};

const myFunc = () => {
  let fname = document.querySelector("#firstName").value;
  let lname = document.querySelector("#lastName").value;
  let country = document.querySelector("#country").value;
  let address1 = document.querySelector("#address").value;
  let address2 = document.querySelector("#address2").value;
  let address = address1 + address2;
  let city = document.querySelector("#city").value;
  let state = document.querySelector("#state").value;
  let zip = document.querySelector("#zipCode").value;
  let phn = document.querySelector("#mobile").value;

  if (
    fname === "" ||
    lname === "" ||
    country === "" ||
    address === "" ||
    city === "" ||
    state === "" ||
    zip === "" ||
    phn === ""
  ) {
    alert("Please fill all the details");
  } else {
    let uAddObj = {
      fname,
      lname,
      country,
      address,
      city,
      state,
      zip,
      phn,
    };
    userDetails.push(uAddObj);
    localStorage.setItem("userAddress", JSON.stringify(userDetails));
    window.location.href = "payment.html";
  }
};
