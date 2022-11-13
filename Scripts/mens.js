import navbar from "../Components/navbar.js"
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

import footer from "../Components/footer.js";
let footer_div = document.getElementById("footer");
footer_div.innerHTML = footer();


let data = [
    {
        image_url: ["https://cdn-images.farfetch-contents.com/19/27/83/98/19278398_42357243_1000.jpg","https://cdn-images.farfetch-contents.com/19/27/83/98/19278398_42356206_1000.jpg","https://cdn-images.farfetch-contents.com/19/27/83/98/19278398_42355538_1000.jpg","https://cdn-images.farfetch-contents.com/19/27/83/98/19278398_42355544_1000.jpg","https://cdn-images.farfetch-contents.com/19/27/83/98/19278398_42355543_1000.jpg"],
        seasons: "New Season",
        name: "VTMNTS",
        description: "barcode-print drawstring-fastening hoodie",
        price: `1104`,
        highlights: ["white,cotton blend","barcode print","drawstring hood","front pouch pocket","long sleeves","elasticated hem"],
        composition: "Cotton 80%, Polyester 20%",
        productId: "FARFETCH ID: 19278398"
    },
    {
        image_url: ["https://cdn-images.farfetch-contents.com/19/01/45/56/19014556_41510652_1000.jpg","https://cdn-images.farfetch-contents.com/19/01/45/56/19014556_41511096_1000.jpg","https://cdn-images.farfetch-contents.com/19/01/45/56/19014556_41510641_1000.jpg","https://cdn-images.farfetch-contents.com/19/01/45/56/19014556_41510640_1000.jpg"],
        seasons: "New Season",
        name: "Philipp Plein",
        description: "The $kull quartz 47mm",
        price: `685`,
        highlights: ["black","stainless steel","logo-engraved bezel","skull charm","round face","quartz movement","logo-embossed strap","buckle fastening","water resistance up to 50m/5 ATM","This item comes with a standard two-year warranty from the brand."],
        composition: ["Polyurethane 100%, Stainless Steel 100%"],
        productId: "FARFETCH ID: 19014556"
    },
    {
        image_url: ["https://cdn-images.farfetch-contents.com/19/27/19/35/19271935_42320708_1000.jpg","https://cdn-images.farfetch-contents.com/19/27/19/35/19271935_42320702_1000.jpg","https://cdn-images.farfetch-contents.com/19/27/19/35/19271935_42320707_1000.jpg","https://cdn-images.farfetch-contents.com/19/27/19/35/19271935_42320704_1000.jpg","https://cdn-images.farfetch-contents.com/19/27/19/35/19271935_42320706_1000.jpg"],
        seasons: "New Season",
        name: "Prada",
        description: "tapered wool trousers",
        price: `1710`,
        highlights: ["navy blue","wool,belt loops","front button and zip fastening","two side slit pockets","rear welt pocket","tapered leg","ribbed cuffs"],
        composition: "Wool 100%",
        productId: "FARFETCH ID: 19271935",
    },
    {
        image_url: ["https://cdn-images.farfetch-contents.com/19/13/76/97/19137697_42269836_1000.jpg","https://cdn-images.farfetch-contents.com/19/13/76/97/19137697_42268853_1000.jpg","https://cdn-images.farfetch-contents.com/19/13/76/97/19137697_42269842_1000.jpg","https://cdn-images.farfetch-contents.com/19/13/76/97/19137697_42268861_1000.jpg"],
        seasons: "New Season",
        name: "Jil Sander",
        description: "logo-plaque leather boots",
        price: `3813`,
        highlights: ["black","calf leather","pointed toe","gold-tone logo plaque","side zip fastening","flat sole"],
        composition: ["Outer: Calf Leather 100%","Lining: Calf Leather 100%","Sole: Calf Leather 50%, Rubber 50%"],
        productId: "FARFETCH ID: 19137697",
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
        image_url: ["https://cdn-images.farfetch-contents.com/18/34/30/11/18343011_42222448_1000.jpg","https://cdn-images.farfetch-contents.com/18/34/30/11/18343011_42222449_1000.jpg"],
        seasons: "New Season",
        name: "visvim",
        description: "logo-patch wool beanie hit",
        price: `330`,
        highlights: ["black","knitted construction","linen-wool blend","turn-up hem","logo patch to the front"],
        composition: "Wool 82%, Linen/Flax 18%",
        productId: "FARFETCH ID: 18343011"
    },
    {
        image_url: ["https://cdn-images.farfetch-contents.com/19/18/58/17/19185817_42152229_1000.jpg","https://cdn-images.farfetch-contents.com/19/18/58/17/19185817_42152228_1000.jpg","https://cdn-images.farfetch-contents.com/19/18/58/17/19185817_42153102_1000.jpg","https://cdn-images.farfetch-contents.com/19/18/58/17/19185817_42151747_1000.jpg","https://cdn-images.farfetch-contents.com/19/18/58/17/19185817_42151746_1000.jpg"],
        seasons: "New Season",
        name: "Mastermind Japan",
        description: "skull-motif tote bag",
        price: `1483`,
        highlights: ["black/white","calf leather","silver-tone hardware","skull motif","main compartment","removable pouch","two long top handles"],
        composition: "Calf Leather 100%",
        productId: "FARFETCH ID: 19185817"
    },
    {
        image_url: ["https://cdn-images.farfetch-contents.com/17/99/37/26/17993726_38415070_1000.jpg","https://cdn-images.farfetch-contents.com/17/99/37/26/17993726_38414610_1000.jpg","https://cdn-images.farfetch-contents.com/17/99/37/26/17993726_38415086_1000.jpg","https://cdn-images.farfetch-contents.com/17/99/37/26/17993726_38414597_1000.jpg","https://cdn-images.farfetch-contents.com/17/99/37/26/17993726_38415068_1000.jpg"],
        seasons: "New Season",
        name: "AMI Paris",
        description: "Ami de Coeur roll-neck jumper",
        price: `570`,
        highlights: ["green,merino wool","signature Ami de Coeur monogram motif","roll neck","long sleeves","drop shoulder","ribbed hem","When buying this unisex item", "keep in mind that it is graded in standard men's sizing."],
        composition: "Merino 100%",
        productId: "FARFETCH ID: 17993726",
    },
    {
        image_url: ["https://cdn-images.farfetch-contents.com/18/61/17/80/18611780_41705359_1000.jpg","https://cdn-images.farfetch-contents.com/18/61/17/80/18611780_41705353_1000.jpg","https://cdn-images.farfetch-contents.com/18/61/17/80/18611780_41705360_1000.jpg","https://cdn-images.farfetch-contents.com/18/61/17/80/18611780_41705357_1000.jpg"],
        seasons: "New Season",
        name: "Dolce & Gabbana",
        description: "NS1 low-top sneakers",
        price: `925`,
        highlights: ["black/white","calf leather","all-over logo print","round toe","front lace-up fastening","logo patch at the tongue,branded insole,flat rubber sole"],
        composition: ["Outer: Polyamide 70%, Calf Leather 20%, Elastane 10%","Lining: Fabric 100%","Sole: Rubber 100%"],
        productId: "FARFETCH ID: 18611780",
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