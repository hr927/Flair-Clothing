
let sort_btn = document.getElementById("sort_btn");
let count = 0;
sort_btn.onclick = ()=>{
    if(count===0){
        let sub = document.getElementById("sub");
        document.getElementById("i").style.transform = "rotate(180deg)";
        sub.style.display = "grid";
        count++;
    }else if(count===1){
        let sub = document.getElementById("sub");
        document.getElementById("i").style.transform = "rotate(0deg)";
        sub.style.display = "none";
        count--;
    }
}
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "grid") {
      panel.style.display = "none";
    } else {
      panel.style.display = "grid";
    }
  });
}
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

let data = [
    {
        image_url: ["https://cdn-images.farfetch-contents.com/17/91/97/94/17919794_39582298_480.jpg","https://cdn-images.farfetch-contents.com/17/91/97/94/17919794_39582298_1000.jpg","https://cdn-images.farfetch-contents.com/17/91/97/94/17919794_39583405_1000.jpg","https://cdn-images.farfetch-contents.com/17/91/97/94/17919794_39582300_1000.jpg","https://cdn-images.farfetch-contents.com/17/91/97/94/17919794_39583406_1000.jpg"],
        seasons: "New Season",
        name: "Taller Marmo",
        description: "Ubud feather-embellished gown",
        price: `3,241`,
        highlights: ["silk","ostrich feather","ivory white","feather-trim detailing"],
        composition: "Outer: Silk 100%, Ostrich Feather 100% Lining: Acetate 78%, Viscose 22%",
        productId: "FARFETCH ID: 18533256"
    },
    {
        image_url: ["https://cdn-images.farfetch-contents.com/18/53/32/55/18533255_41350798_1000.jpg","https://cdn-images.farfetch-contents.com/18/53/32/55/18533255_41352195_1000.jpg","https://cdn-images.farfetch-contents.com/18/53/32/55/18533255_41350802_1000.jpg","https://cdn-images.farfetch-contents.com/18/53/32/55/18533255_41352193_1000.jpg"],
        seasons: "New Season",
        name: "Off-White",
        description: "panelled low-top sneakers",
        price: `1097`,
        highlights: ["white/multicolour","leather/cotton","panelled design","perforated detailing"],
        composition: "Outer: Leather 100% Lining: Cotton 100% Sole: Rubber 100%",
        productId: "FARFETCH ID: 18533255"
    },
    {
        image_url: ["https://cdn-images.farfetch-contents.com/18/68/21/67/18682167_42197322_1000.jpg","https://cdn-images.farfetch-contents.com/18/68/21/67/18682167_42197324_1000.jpg","https://cdn-images.farfetch-contents.com/18/68/21/67/18682167_42196439_1000.jpg","https://cdn-images.farfetch-contents.com/18/68/21/67/18682167_42197325_1000.jpg"],
        seasons: "New Season",
        name: "Kenzo",
        description: "monogram crossbody bag",
        price: `684`,
        highlights: ["jet black","cotton","monogram pattern","logo patch to the front"],
        composition: "Cotton 100%",
        productId: "FARFETCH ID: 18682167",
    },
    {
        image_url: ["https://cdn-images.farfetch-contents.com/18/70/37/41/18703741_41616554_1000.jpg","https://cdn-images.farfetch-contents.com/18/70/37/41/18703741_41609967_1000.jpg","https://cdn-images.farfetch-contents.com/18/70/37/41/18703741_41615904_1000.jpg","https://cdn-images.farfetch-contents.com/18/70/37/41/18703741_41610838_1000.jpg"],
        seasons: "New Season",
        name: "AMBUSH",
        description: "graphic-print short-sleeved shirt",
        price: `594`,
        highlights: ["black/multicolour","all-over graphic print","logo patch to the front","front button fastening"],
        composition: "Viscose 100%",
        productId: "FARFETCH ID: 18703741",
    },
    {
        image_url: ["https://cdn-images.farfetch-contents.com/19/21/96/27/19219627_42198739_1000.jpg","https://cdn-images.farfetch-contents.com/19/21/96/27/19219627_42199331_1000.jpg","https://cdn-images.farfetch-contents.com/19/21/96/27/19219627_42200236_1000.jpg","https://cdn-images.farfetch-contents.com/19/21/96/27/19219627_42198740_1000.jpg"],
        seasons: "New Season",
        name: "Rhude",
        description: "logo-print detail T-shirt",
        price: `370`,
        highlights: ["white/blue","cotton","logo print to the front","round neck"],
        composition: "Cotton 100%",
        productId: "FARFETCH ID: 19219627",
    },
    {
        image_url: ["https://cdn-images.farfetch-contents.com/17/74/66/36/17746636_37248193_1000.jpg","https://cdn-images.farfetch-contents.com/17/74/66/36/17746636_37248192_1000.jpg","https://cdn-images.farfetch-contents.com/17/74/66/36/17746636_37246246_1000.jpg","https://cdn-images.farfetch-contents.com/17/74/66/36/17746636_37246238_1000.jpg"],
        seasons: "New Season",
        name: "Coperni",
        description: "Ring Swipe leather tote bag",
        price: `649`,
        highlights: ["black","leather","silver-tone logo plaque","single rounded top handle"],
        composition: "Outer: Leather 100%",
        productId: "FARFETCH ID: 17746636",
    },
    
];
console.log(data);
const append = (data)=>{
    let items = document.getElementById("items");
    items.innerHTML = null;
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
        div.onclick = ()=>{
            getData(el);
        };
    });
}
append(data);

const getData = async(el)=>{
    let res = await fetch(`https://infinite-fortress-00447.herokuapp.com/product/1`,{
        method: 'PUT',
        body: JSON.stringify(el),
        headers: {
            'Content-Type': 'application/json'
        },
    });
    let data = await res.json();
    console.log(data);
}