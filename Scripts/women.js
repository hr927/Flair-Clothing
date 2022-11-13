import navbar from "../Components/navbar.js"
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

import footer from "../Components/footer.js";
let footer_div = document.getElementById("footer");
footer_div.innerHTML = footer();

let data = [
    {
        image_url: ["https://cdn-images.farfetch-contents.com/19/10/05/61/19100561_42312996_1000.jpg","https://cdn-images.farfetch-contents.com/19/10/05/61/19100561_42315391_1000.jpg","https://cdn-images.farfetch-contents.com/19/10/05/61/19100561_42314896_1000.jpg","https://cdn-images.farfetch-contents.com/19/10/05/61/19100561_42315400_1000.jpg"],
        seasons: "New Season",
        name: "Gucci",
        description: "GG-jacquard knitted vest",
        price: `920`,
        highlights: ["beige","cotton blend","signature GG Supreme embroidery","V-neck","sleeveless","ribbed hem"],
        composition: "Cotton 85%, Metallic Fibre 9%, Polyamide 6%",
        productId: "FARFETCH ID: 19100561"
    },
    {
        image_url: ["https://cdn-images.farfetch-contents.com/18/74/40/63/18744063_42276872_1000.jpg","https://cdn-images.farfetch-contents.com/18/74/40/63/18744063_42277209_1000.jpg","https://cdn-images.farfetch-contents.com/18/74/40/63/18744063_42276871_1000.jpg","https://cdn-images.farfetch-contents.com/18/74/40/63/18744063_42276870_1000.jpg"],
        seasons: "New Season",
        name: "Valentino Garavani",
        description: "Tan-Go 165mm platform pumps",
        price: `2172`,
        highlights: ["white,calf leather","gold-tone hardware","VLogo Signature","pointed toe","buckle-fastening ankle strap","branded insole","platform sole","high block heel"],
        composition: ["Outer: Calf Leather 100%", "Sole: Calf Leather 100%", "Lining: Goat Skin 100%"],
        productId: "FARFETCH ID: 18744063"
    },
    {
        image_url: ["https://cdn-images.farfetch-contents.com/19/09/66/14/19096614_42303148_1000.jpg","https://cdn-images.farfetch-contents.com/19/09/66/14/19096614_42303145_1000.jpg","https://cdn-images.farfetch-contents.com/19/09/66/14/19096614_42303146_1000.jpg","https://cdn-images.farfetch-contents.com/19/09/66/14/19096614_42303149_1000.jpg","https://cdn-images.farfetch-contents.com/19/09/66/14/19096614_42303147_1000.jpg"],
        seasons: "New Season",
        name: "Gucci",
        description: "GG logo-plaque shoulder bag",
        price: `2100`,
        highlights: ["off-white/mandarin","calf leather","gold-tone logo plaque","foldover top","chain-link shoulder strap","main compartment"],
        composition: "Outer: Calf Leather 100%",
        productId: "FARFETCH ID: 19096614",
    },
    {
        image_url: ["https://cdn-images.farfetch-contents.com/19/27/74/50/19277450_42390050_1000.jpg","https://cdn-images.farfetch-contents.com/19/27/74/50/19277450_42351131_1000.jpg","https://cdn-images.farfetch-contents.com/19/27/74/50/19277450_42350316_1000.jpg","https://cdn-images.farfetch-contents.com/19/27/74/50/19277450_42350320_1000.jpg","https://cdn-images.farfetch-contents.com/19/27/74/50/19277450_42350318_1000.jpg"],
        seasons: "New Season",
        name: "Mugler",
        description: "x Wolford semi-sheer panelled minidress",
        price: `881`,
        highlights: ["black","stretch-design","semi-sheer construction","micro-mesh panels","high neck,long sheer sleeves","straight hem","thigh-length"],
        composition: "Polyamide 67%, Elastane 33%",
        productId: "FARFETCH ID: 19277450",
    },
    
];
console.log(data);
let count1=0;
const append = (data)=>{
    let products = document.getElementById("products");
    products.innerHTML = null;
    data.forEach((el)=>{
        let div = document.createElement("div");
        div.setAttribute("class","card");
        let top = document.createElement("div");
        top.setAttribute("class","cardTop");
        let offer = document.createElement("p");
        offer.innerHTML = "22% off";
        let wish = document.createElement("button");
        wish.innerHTML = '<i class="fa fa-heart-o fa-2x"></i>';
        
        let image = document.createElement("img");
        image.src = el.image_url[0];
        image.onmouseover = ()=>{
            image.src = el.image_url[1];
        }
        image.onmouseout = ()=>{
            image.src = el.image_url[0];
        }
        let seasons = document.createElement("p");
        seasons.innerText = el.seasons;
        let name = document.createElement("h3");
        name.innerText = el.name;
        let description = document.createElement("p");
        description.innerText = el.description;
        let price = document.createElement("p");
        price.innerText = `$${el.price}`;
        top.append(offer,wish);
        div.append(top,image,seasons,name,description,price);
        
        products.append(div);
        image.onclick = ()=>{
            if(count1===0){
                getData(el);
                count1++;
            } else if(count1>0){
                getData2(el);
                count1++;
            }
        };
        wish.onclick = ()=>{
            wishData(el);
        };
    });
}
append(data);

const getData = async(el)=>{
    let res = await fetch(`https://warm-earth-75082.herokuapp.com/product/1`,{
        method: 'PUT',
        body: JSON.stringify(el),
        headers: {
            'Content-Type': 'application/json'
        },
    });
    let data = await res.json();
    console.log(data);
    window.location.href='product_details.html'
    // console.log('post')
}

const getData2 = async(el)=>{
    let res = await fetch(`https://warm-earth-75082.herokuapp.com/product/1`,{
        method: 'PUT',
        body: JSON.stringify(el),
        headers: {
            'Content-Type': 'application/json'
        },
    });
    let data = await res.json();
    console.log(data);
    window.location.href='product_details.html'
    //console.log('Put')
}
const wishData = async(el)=>{
    let res = await fetch(`https://infinite-fortress-00447.herokuapp.com/wishlist`,{
        method: 'POST',
        body: JSON.stringify(el),
        headers: {
            'Content-Type': 'application/json'
        },
    });
    let data = await res.json();
    console.log(data);
}

let datas = [
    {
        image_url: ["https://cdn-images.farfetch-contents.com/18/58/26/18/18582618_40851734_1000.jpg","https://cdn-images.farfetch-contents.com/18/58/26/18/18582618_40852464_1000.jpg","https://cdn-images.farfetch-contents.com/18/58/26/18/18582618_40852461_1000.jpg","https://cdn-images.farfetch-contents.com/18/58/26/18/18582618_40852462_1000.jpg","https://cdn-images.farfetch-contents.com/18/58/26/18/18582618_40852460_1000.jpg"],
        seasons: "New Season",
        name: "Prada",
        description: "small brushed tote bag",
        price: `4490`,
        highlights: ["white","leather","debossed logo to the front","brushed effect","top zip fastening","two rounded top handles","adjustable detachable shoulder strap"],
        composition: "Outer: Leather 100%",
        productId: "FARFETCH ID: 18582618"
    },
    {
        image_url: ["https://cdn-images.farfetch-contents.com/13/15/01/28/13150128_30475816_1000.jpg","https://cdn-images.farfetch-contents.com/13/15/01/28/13150128_30476901_1000.jpg","https://cdn-images.farfetch-contents.com/13/15/01/28/13150128_30476903_1000.jpg","https://cdn-images.farfetch-contents.com/13/15/01/28/13150128_30475817_1000.jpg","https://cdn-images.farfetch-contents.com/13/15/01/28/13150128_30476902_1000.jpg"],
        seasons: "New Season",
        name: "Manolo Blahnik",
        description: "blue Hangisi 70 silk satin leather pumps",
        price: `2241`,
        highlights: ["Made in Italy"],
        composition: ["Outer: Silk Satin 100%","Lining: Leather 100%","Sole: Leather 100%"],
        productId: "FARFETCH ID: 13150128"
    },
    {
        image_url: ["https://cdn-images.farfetch-contents.com/14/57/76/98/14577698_29297010_1000.jpg","https://cdn-images.farfetch-contents.com/14/57/76/98/14577698_29298043_1000.jpg","https://cdn-images.farfetch-contents.com/14/57/76/98/14577698_29298045_1000.jpg","https://cdn-images.farfetch-contents.com/14/57/76/98/14577698_29298044_1000.jpg"],
        seasons: "New Season",
        name: "Anissa Kermiche",
        description: "Love Handles vase (33cm)",
        price: `646`,
        highlights: ["royal blue","porcelain,glazed finish","curve-edge body","two rounded handles to the sides","wide neck"],
        composition: "Ceramic 100%",
        productId: "FARFETCH ID: 14577698",
    },
    {
        image_url: ["https://cdn-images.farfetch-contents.com/17/60/96/70/17609670_37668600_1000.jpg","https://cdn-images.farfetch-contents.com/17/60/96/70/17609670_37667581_1000.jpg"],
        seasons: "New Season",
        name: "Saint Laurent",
        description: "logo-plaque quilted AirPods case",
        price: `645`,
        highlights: ["black,leather","gold-tone logo plaque","quilted,gold-tone hardware","all-around zip fastening","keyring attachment"],
        composition: "Calf Leather 100%",
        productId: "FARFETCH ID: 17609670",
    },
    
    
];
console.log(datas);

const appended = (datas)=>{
    let items = document.getElementById("items");
    items.innerHTML = null;
    datas.forEach((el)=>{
        let div = document.createElement("div");
        div.setAttribute("class","card");
        let top = document.createElement("div");
        top.setAttribute("class","cardTop");
        let offer = document.createElement("p");
        offer.innerHTML = "22% off";
        let wish = document.createElement("button");
        wish.innerHTML = '<i class="fa fa-heart-o fa-2x"></i>';
        
        let image = document.createElement("img");
        image.src = el.image_url[0];
        image.onmouseover = ()=>{
            image.src = el.image_url[1];
        }
        image.onmouseout = ()=>{
            image.src = el.image_url[0];
        }
        let seasons = document.createElement("p");
        seasons.innerText = el.seasons;
        let name = document.createElement("h3");
        name.innerText = el.name;
        let description = document.createElement("p");
        description.innerText = el.description;
        let price = document.createElement("p");
        price.innerText = `$${el.price}`;
        top.append(offer,wish);
        div.append(top,image,seasons,name,description,price);
        
        items.append(div);
        image.onclick = ()=>{
            if(count1===0){
                getData(el);
                count1++;
            } else if(count1>0){
                getData2(el);
                count1++;
            }
        };
        wish.onclick = ()=>{
            wishData(el);
        };
    });
}
appended(datas);





// Bottom section reusable
import bottom from "../Components/bottom.js";
let bottomDiv = document.querySelector("#bottomsec");
bottomDiv.innerHTML = bottom();

const dataadd=async(el)=>{
    try{
        let res=await fetch('https://warm-earth-75082.herokuapp.com/product',{
            method:'POST',
            body: JSON.stringify(el),
            headers:{
                'Content-Type':'application/json',
            }
        })
let data=await res.json();
console.log('inside');
    }
    catch(err){
        console.log('err')
    }
}
let prod={
    "image_url": [
      "https://cdn-images.farfetch-contents.com/14/57/76/98/14577698_29297010_1000.jpg",
      "https://cdn-images.farfetch-contents.com/14/57/76/98/14577698_29298043_1000.jpg",
      "https://cdn-images.farfetch-contents.com/14/57/76/98/14577698_29298045_1000.jpg",
      "https://cdn-images.farfetch-contents.com/14/57/76/98/14577698_29298044_1000.jpg"
    ],
    "seasons": "New Season",
    "name": "Anissa Kermiche",
    "description": "Love Handles vase (33cm)",
    "price": "646",
    "highlights": [
      "royal blue",
      "porcelain,glazed finish",
      "curve-edge body",
      "two rounded handles to the sides",
      "wide neck"
    ],
    "composition": "Ceramic 100%",
    "productId": "FARFETCH ID: 14577698",
    "id": 1
  }

  dataadd(prod);