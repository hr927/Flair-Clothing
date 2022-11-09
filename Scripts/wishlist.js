const getData = async () => {
  try {
    let res = await fetch(
      `https://infinite-fortress-00447.herokuapp.com/product/`
    );
    let data = await res.json();
    console.log("data:", data);
    appendData(data);
  } catch (err) {
    console.log(err);
  }
};

getData();
let prodSizes = ["XS", "S", "M", "L", "XL"];
const appendData = (arr) => {
  let defaultDiv = document.querySelector("#default");
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
    prodPrice.innerText = "$" + +el.price;
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
