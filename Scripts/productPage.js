
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
        image_url: ["https://cdn-images.farfetch-contents.com/17/91/97/94/17919794_39582298_480.jpg","https://cdn-images.farfetch-contents.com/17/91/97/94/17919794_39583405_1000.jpg","https://cdn-images.farfetch-contents.com/17/91/97/94/17919794_39582298_1000.jpg","https://cdn-images.farfetch-contents.com/17/91/97/94/17919794_39582300_1000.jpg"],
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
let count1 = 0;
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
                count++;
            }
            
        };
        wish.onclick = ()=>{
            wishData(el);
        };
    });
}
append(data);

const getData = async(el)=>{
    let res = await fetch(`https://infinite-fortress-00447.herokuapp.com/product`,{
        method: 'POST',
        body: JSON.stringify(el),
        headers: {
            'Content-Type': 'application/json'
        },
    });
    let data = await res.json();
    console.log(data);
}
const getData2 = async(el)=>{
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

let women_data = [
    {
        image_url: ["https://cdn-images.farfetch-contents.com/18/45/28/14/18452814_42015043_1000.jpg","https://cdn-images.farfetch-contents.com/18/45/28/14/18452814_42015041_1000.jpg","https://cdn-images.farfetch-contents.com/18/45/28/14/18452814_42015038_1000.jpg","https://cdn-images.farfetch-contents.com/18/45/28/14/18452814_42088329_1000.jpg"],
        seasons: "New Season",
        name: "Christopher John Rogers",
        description: "colour-block ribbed polo shirt",
        price: `1,212`,
        highlights: ["multicolour","ribbed knit","colour-block print","polo collar"],
        composition: "Nylon 50%, Viscose 42%, PBT Elite 8%",
        productId: "FARFETCH ID: 18452814"
    },
    {
        image_url: ["https://cdn-images.farfetch-contents.com/18/53/33/14/18533314_41740744_1000.jpg","https://cdn-images.farfetch-contents.com/18/53/33/14/18533314_41740742_1000.jpg","https://cdn-images.farfetch-contents.com/18/53/33/14/18533314_41740743_1000.jpg","https://cdn-images.farfetch-contents.com/18/53/33/14/18533314_41740745_1000.jpg"],
        seasons: "New Season",
        name: "Off-White",
        description: "asymmetric cargo skirt",
        price: `1,350`,
        highlights: ["dark grey","cotton blend","asymmetric design","two front cargo pockets"],
        composition: "Outer: Cotton 83%, Polyamide 17%",
        productId: "FARFETCH ID: 18533314"
    },
    {
        image_url: ["https://cdn-images.farfetch-contents.com/18/90/37/16/18903716_41087054_1000.jpg","https://cdn-images.farfetch-contents.com/18/90/37/16/18903716_41087056_1000.jpg","https://cdn-images.farfetch-contents.com/18/90/37/16/18903716_41087058_1000.jpg","https://cdn-images.farfetch-contents.com/18/90/37/16/18903716_41088078_1000.jpg"],
        seasons: "New Season",
        name: "Dion Lee",
        description: "lace up bell-sleeve blouse",
        price: `1,240`,
        highlights: ["black","semi-sheer construction","V-neck","front lace-up fastening"],
        composition: "Silk 100%",
        productId: "FARFETCH ID: 18903716"
    },
    {
        image_url: ["https://cdn-images.farfetch-contents.com/17/19/80/66/17198066_34926984_1000.jpg","https://cdn-images.farfetch-contents.com/17/19/80/66/17198066_34926992_1000.jpg","https://cdn-images.farfetch-contents.com/17/19/80/66/17198066_34927859_1000.jpg","https://cdn-images.farfetch-contents.com/17/19/80/66/17198066_34927858_1000.jpg"],
        seasons: "New Season",
        name: "Jacquemus",
        description: "Le Polo Neve textured jumper",
        price: `545`,
        highlights: ["pink/red","two-tone design","textured finish","spread collar"],
        composition: "Polyamide 97%, Spandex/Elastane 3%",
        productId: "FARFETCH ID: 17198066"
    },
    {
        image_url: ["https://cdn-images.farfetch-contents.com/19/19/94/76/19199476_42162686_1000.jpg","https://cdn-images.farfetch-contents.com/19/19/94/76/19199476_42163145_1000.jpg","https://cdn-images.farfetch-contents.com/19/19/94/76/19199476_42158261_1000.jpg","https://cdn-images.farfetch-contents.com/19/19/94/76/19199476_42158262_1000.jpg"],
        seasons: "New Season",
        name: "AREA",
        description: "rhinestone-embellished denim mini skirt",
        price: `1,376`,
        highlights: ["dark indigo blue","cotton","rhinestone pyramid embellishment","exposed rear zip fastening"],
        composition: "Cotton 100%",
        productId: "FARFETCH ID: 19199476"
    },
    {
        image_url: ["https://cdn-images.farfetch-contents.com/18/38/05/44/18380544_42094384_1000.jpg","https://cdn-images.farfetch-contents.com/18/38/05/44/18380544_42095058_1000.jpg","https://cdn-images.farfetch-contents.com/18/38/05/44/18380544_42093512_1000.jpg","https://cdn-images.farfetch-contents.com/18/38/05/44/18380544_42094413_1000.jpg"],
        seasons: "New Season",
        name: "AREA",
        description: "metallic minidress",
        price: `1,799`,
        highlights: ["silver-tone","metallic finish","bustier-style neckline","adjustable spaghetti straps"],
        composition: "Outer: Cotton 40%, Polyamide 36%, Polyester 19%",
        productId: "FARFETCH ID: 18380544"
    },
];
let women_btn = document.getElementById("women_btn");
let men_btn = document.getElementById("men_btn");
women_btn.onclick = ()=>{
    women_btn.style.borderBottom = "3px solid rgb(61, 61, 61)";
    men_btn.style.borderBottom = "3px solid white";
    append(women_data);
};

let men_data = [
    {
        image_url: ["https://cdn-images.farfetch-contents.com/19/22/47/79/19224779_42343990_1000.jpg","https://cdn-images.farfetch-contents.com/19/22/47/79/19224779_42345795_1000.jpg","https://cdn-images.farfetch-contents.com/19/22/47/79/19224779_42343986_1000.jpg","https://cdn-images.farfetch-contents.com/19/22/47/79/19224779_42345791_1000.jpg"],
        seasons: "New Season",
        name: "C.P. Company",
        description: "Lens-detail puffer jacket",
        price: `1,459`,
        highlights: ["blue","feather down","signature Lens detail","padded design"],
        composition: "Outer: Polyamide 100%, Elastane 8%",
        productId: "FARFETCH ID: 19224779"
    },
    {
        image_url: ["https://cdn-images.farfetch-contents.com/18/41/23/04/18412304_40010945_1000.jpg","https://cdn-images.farfetch-contents.com/18/41/23/04/18412304_40013025_1000.jpg","https://cdn-images.farfetch-contents.com/18/41/23/04/18412304_40010943_1000.jpg","https://cdn-images.farfetch-contents.com/18/41/23/04/18412304_40013014_1000.jpg"],
        seasons: "New Season",
        name: "JW Anderson",
        description: "intarsia-knit logo hoodie",
        price: `950`,
        highlights: ["taupe","intarsia-knit logo","drawstring hood","long sleeves"],
        composition: "Wool 100%",
        productId: "FARFETCH ID: 18412304"
    },
    {
        image_url: ["https://cdn-images.farfetch-contents.com/19/20/20/85/19202085_42164052_1000.jpg","https://cdn-images.farfetch-contents.com/19/20/20/85/19202085_42133855_1000.jpg","https://cdn-images.farfetch-contents.com/19/20/20/85/19202085_42135101_1000.jpg","https://cdn-images.farfetch-contents.com/19/20/20/85/19202085_42133854_1000.jpg"],
        seasons: "New Season",
        name: "A.P.C.",
        description: "straight-leg jeans",
        price: `393`,
        highlights: ["light blue","cotton","high waist","classic five pockets"],
        composition: "Cotton 100%",
        productId: "FARFETCH ID: 19202085"
    },
    {
        image_url: ["https://cdn-images.farfetch-contents.com/18/59/25/44/18592544_42176311_1000.jpg","https://cdn-images.farfetch-contents.com/18/59/25/44/18592544_42177060_1000.jpg","https://cdn-images.farfetch-contents.com/18/59/25/44/18592544_42177062_1000.jpg","https://cdn-images.farfetch-contents.com/18/59/25/44/18592544_42177061_1000.jpg"],
        seasons: "New Season",
        name: "Axel Arigato",
        description: "Area car coat",
        price: `635`,
        highlights: ["black","wool blend","classic collar","front button fastening"],
        composition: "Outer: Wool 98%, Polyester 2%",
        productId: "FARFETCH ID: 18592544"
    },
    {
        image_url: ["https://cdn-images.farfetch-contents.com/18/04/17/94/18041794_38648000_1000.jpg","https://cdn-images.farfetch-contents.com/18/04/17/94/18041794_38648009_1000.jpg","https://cdn-images.farfetch-contents.com/18/04/17/94/18041794_38647603_1000.jpg","https://cdn-images.farfetch-contents.com/18/04/17/94/18041794_38648002_1000.jpg"],
        seasons: "New Season",
        name: "Nanushka",
        description: "animal-print organic-cotton shirt",
        price: `764`,
        highlights: ["nude/dark brown","organic cotton","animal print","front button fastening"],
        composition: "Organic Cotton 100%",
        productId: "FARFETCH ID: 18041794"
    },
    {
        image_url: ["https://cdn-images.farfetch-contents.com/18/79/15/08/18791508_41006434_1000.jpg","https://cdn-images.farfetch-contents.com/18/79/15/08/18791508_41006387_1000.jpg","https://cdn-images.farfetch-contents.com/18/79/15/08/18791508_41006463_1000.jpg","https://cdn-images.farfetch-contents.com/18/79/15/08/18791508_41006428_1000.jpg"],
        seasons: "New Season",
        name: "Kenzo",
        description: "straight leg logo-patch jeans",
        price: `520`,
        highlights: ["indigo blue","cotton","logo patch to the rear","tonal stitching"],
        composition: "Cotton 100%",
        productId: "FARFETCH ID: 18791508"
    },
];


men_btn.onclick = ()=>{
    men_btn.style.borderBottom = "3px solid rgb(61, 61, 61)";
    women_btn.style.borderBottom = "3px solid white";
    append(men_data);
};


let accessorie_data = [
    {
        image_url: ["https://cdn-images.farfetch-contents.com/19/24/66/66/19246666_42132450_1000.jpg","https://cdn-images.farfetch-contents.com/19/24/66/66/19246666_42132448_1000.jpg","https://cdn-images.farfetch-contents.com/19/24/66/66/19246666_42132449_1000.jpg","https://cdn-images.farfetch-contents.com/19/24/66/66/19246666_42133315_1000.jpg"],
        seasons: "New Season",
        name: "A-COLD-WALL*",
        description: "x Retrosuperfuture Caro sunglasses",
        price: `548`,
        highlights: ["black","grey tinted lenses","marbled pattern","contrasting border"],
        composition: "Acrylic 100%, Acetate 100%",
        productId: "FARFETCH ID: 19246666"
    },
    {
        image_url: ["https://cdn-images.farfetch-contents.com/17/92/13/88/17921388_40008990_1000.jpg","https://cdn-images.farfetch-contents.com/17/92/13/88/17921388_40010368_1000.jpg","https://cdn-images.farfetch-contents.com/17/92/13/88/17921388_40324577_1000.jpg","https://cdn-images.farfetch-contents.com/17/92/13/88/17921388_40324572_1000.jpg"],
        seasons: "New Season",
        name: "Dsquared2",
        description: "embroidered-logo baseball cap",
        price: `166`,
        highlights: ["navy blue/cloud white","signature Icon motif","curved narrow brim","adjustable strap to the rear"],
        composition: "Cotton 100%",
        productId: "FARFETCH ID: 17921388"
    },
    {
        image_url: ["https://cdn-images.farfetch-contents.com/17/92/13/75/17921375_40116442_1000.jpg","https://cdn-images.farfetch-contents.com/17/92/13/75/17921375_40114777_1000.jpg","https://cdn-images.farfetch-contents.com/17/92/13/75/17921375_40116381_1000.jpg","https://cdn-images.farfetch-contents.com/17/92/13/75/17921375_40116425_1000.jpg"],
        seasons: "New Season",
        name: "Dsquared2",
        description: "logo-embroidered cap",
        price: `180`,
        highlights: ["green","white","cotton","embroidered logo to the front"],
        composition: "Cotton 100%",
        productId: "FARFETCH ID: 17921375"
    },
    {
        image_url: ["https://cdn-images.farfetch-contents.com/17/92/32/02/17923202_39985398_1000.jpg","https://cdn-images.farfetch-contents.com/17/92/32/02/17923202_39985425_1000.jpg","https://cdn-images.farfetch-contents.com/17/92/32/02/17923202_39984685_1000.jpg","https://cdn-images.farfetch-contents.com/17/92/32/02/17923202_39986234_1000.jpg"],
        seasons: "New Season",
        name: "Polo Ralph Lauren",
        description: "embroidered-logo baseball cap",
        price: `95`,
        highlights: ["navy blue","signature Polo Pony motif","curved narrow brim","adjustable strap to the rear"],
        composition: "Cotton 100%",
        productId: "FARFETCH ID: 17923202"
    },
    {
        image_url: ["https://cdn-images.farfetch-contents.com/17/92/32/01/17923201_40317497_1000.jpg","https://cdn-images.farfetch-contents.com/17/92/32/01/17923201_40318260_1000.jpg","https://cdn-images.farfetch-contents.com/17/92/32/01/17923201_40318237_1000.jpg","https://cdn-images.farfetch-contents.com/17/92/32/01/17923201_40318267_1000.jpg"],
        seasons: "New Season",
        name: "Polo Ralph Lauren",
        description: "Polo Pony-embroidered cotton cap",
        price: `95`,
        highlights: ["navy blue","signature Polo Pony motif","curved narrow brim","adjustable strap to the rear"],
        composition: "Cotton 100%",
        productId: "FARFETCH ID: 17923201"
    },
    {
        image_url: ["https://cdn-images.farfetch-contents.com/17/92/32/00/17923200_39941221_1000.jpg","https://cdn-images.farfetch-contents.com/17/92/32/00/17923200_39941219_1000.jpg","https://cdn-images.farfetch-contents.com/17/92/32/00/17923200_39941220_1000.jpg","https://cdn-images.farfetch-contents.com/17/92/32/00/17923200_39937892_1000.jpg"],
        seasons: "New Season",
        name: "Polo Ralph Lauren",
        description: "embroidered-logo baseball cap",
        price: `55`,
        highlights: ["light grey","signature Polo Pony motif","adjustable strap to the rear","curved narrow brim"],
        composition: "Cotton 66%, Polyester 34%",
        productId: "FARFETCH ID: 17923200"
    },
];
let accessorie = document.getElementById("accessorie");
accessorie.onclick = ()=>{
    append(accessorie_data);
};

let bags_data = [
    {
        image_url: ["https://cdn-images.farfetch-contents.com/19/17/64/69/19176469_42045244_1000.jpg","https://cdn-images.farfetch-contents.com/19/17/64/69/19176469_42046149_1000.jpg","https://cdn-images.farfetch-contents.com/19/17/64/69/19176469_42044371_1000.jpg","https://cdn-images.farfetch-contents.com/19/17/64/69/19176469_42046150_1000.jpg"],
        seasons: "New Season",
        name: "Lemaire",
        description: "Game lace-up shoulder bag",
        price: `1,808`,
        highlights: ["rust brown","lace-up detailing","top zip fastening","adjustable shoulder strap"],
        composition: "Outer: Polyamide 100%",
        productId: "FARFETCH ID: 19176469"
    },
    {
        image_url: ["https://cdn-images.farfetch-contents.com/19/26/21/82/19262182_42284312_1000.jpg","https://cdn-images.farfetch-contents.com/19/26/21/82/19262182_42282826_1000.jpg","https://cdn-images.farfetch-contents.com/19/26/21/82/19262182_42283457_1000.jpg","https://cdn-images.farfetch-contents.com/19/26/21/82/19262182_42283458_1000.jpg"],
        seasons: "New Season",
        name: "Sunnei",
        description: "contrast-stitch leather shoulder bag",
        price: `1,248`,
        highlights: ["black/green","calf leather","contrast stitching","adjustable shoulder strap"],
        composition: "Outer: Calf Leather 100%",
        productId: "FARFETCH ID: 19262182"
    },
    {
        image_url: ["https://cdn-images.farfetch-contents.com/17/92/13/20/17921320_40844618_1000.jpg","https://cdn-images.farfetch-contents.com/17/92/13/20/17921320_40305256_1000.jpg","https://cdn-images.farfetch-contents.com/17/92/13/20/17921320_40303400_1000.jpg","https://cdn-images.farfetch-contents.com/17/92/13/20/17921320_40304068_1000.jpg"],
        seasons: "New Season",
        name: "BOSS",
        description: "X-Town crossbody bag",
        price: `403`,
        highlights: ["black/green","calf leather","contrast stitching","adjustable shoulder strap"],
        composition: "Outer: Leather 100%",
        productId: "FARFETCH ID: 17921320"
    },
    {
        image_url: ["https://cdn-images.farfetch-contents.com/18/68/14/17/18681417_40811083_1000.jpg","https://cdn-images.farfetch-contents.com/18/68/14/17/18681417_40812707_1000.jpg","https://cdn-images.farfetch-contents.com/18/68/14/17/18681417_40812708_1000.jpg","https://cdn-images.farfetch-contents.com/18/68/14/17/18681417_40811084_1000.jpg"],
        seasons: "New Season",
        name: "Kenzo",
        description: "logo-print backpack",
        price: `594`,
        highlights: ["black/white","all-over logo print","front zip fastening pockets","single rounded top handle"],
        composition: "Polyester 100%",
        productId: "FARFETCH ID: 18681417"
    },
    {
        image_url: ["https://cdn-images.farfetch-contents.com/17/92/20/57/17922057_40289888_1000.jpg","https://cdn-images.farfetch-contents.com/17/92/20/57/17922057_40292267_1000.jpg","https://cdn-images.farfetch-contents.com/17/92/20/57/17922057_40288990_1000.jpg","https://cdn-images.farfetch-contents.com/17/92/20/57/17922057_40288987_1000.jpg"],
        seasons: "New Season",
        name: "BOSS",
        description: "logo-print backpack",
        price: `258`,
        highlights: ["black/white","all-over logo print","front zip fastening pockets","single rounded top handle"],
        composition: "Polyester 100%",
        productId: "FARFETCH ID: 17922057"
    },
    {
        image_url: ["https://cdn-images.farfetch-contents.com/18/03/77/49/18037749_41625527_1000.jpg","https://cdn-images.farfetch-contents.com/18/03/77/49/18037749_41468641_1000.jpg","https://cdn-images.farfetch-contents.com/18/03/77/49/18037749_41467499_1000.jpg","https://cdn-images.farfetch-contents.com/18/03/77/49/18037749_41467490_1000.jpg"],
        seasons: "New Season",
        name: "BOSS",
        description: "buckle-detail tote bag",
        price: `502`,
        highlights: ["black/white","all-over logo print","front zip fastening pockets","single rounded top handle"],
        composition: "Polyester 100%",
        productId: "FARFETCH ID: 18037749"
    },
];

let bags = document.getElementById("bags");
bags.onclick = ()=>{
    append(bags_data);
}

let shoe_data = [
    {
        image_url: ["https://cdn-images.farfetch-contents.com/18/98/72/95/18987295_41361185_1000.jpg","https://cdn-images.farfetch-contents.com/18/98/72/95/18987295_41361190_1000.jpg","https://cdn-images.farfetch-contents.com/18/98/72/95/18987295_41362209_1000.jpg","https://cdn-images.farfetch-contents.com/18/98/72/95/18987295_41362208_1000.jpg"],
        seasons: "New Season",
        name: "Lanvin",
        description: "Curb lace-up chunky sneakers",
        price: `1,760`,
        highlights: ["light blue","contrasting laces","branded insole","pull-tab at the tongue"],
        composition: "Sole: Rubber 100%",
        productId: "FARFETCH ID: 18987295"
    },
    {
        image_url: ["https://cdn-images.farfetch-contents.com/18/96/58/74/18965874_41448170_1000.jpg","https://cdn-images.farfetch-contents.com/18/96/58/74/18965874_41447843_1000.jpg","https://cdn-images.farfetch-contents.com/18/96/58/74/18965874_41447846_1000.jpg","https://cdn-images.farfetch-contents.com/18/96/58/74/18965874_41447850_1000.jpg"],
        seasons: "New Season",
        name: "Officine Creative",
        description: "Pistol 002 lace-up boots",
        price: `1,156`,
        highlights: ["chocolate brown","calf leather","calf suede","front lace-up fastening"],
        composition: "Sole: Rubber 100%",
        productId: "FARFETCH ID: 18965874"
    },
    {
        image_url: ["https://cdn-images.farfetch-contents.com/18/48/46/15/18484615_42116425_1000.jpg","https://cdn-images.farfetch-contents.com/18/48/46/15/18484615_42114410_1000.jpg","https://cdn-images.farfetch-contents.com/18/48/46/15/18484615_42116422_1000.jpg","https://cdn-images.farfetch-contents.com/18/48/46/15/18484615_42116427_1000.jpg"],
        seasons: "New Season",
        name: "Marsèll",
        description: "lace-up leather boots",
        price: `2,098`,
        highlights: ["chocolate brown","chocolate brown","chocolate brown","chocolate brown"],
        composition: "Lining: Calf Leather 100%",
        productId: "FARFETCH ID: 18484615"
    },
    {
        image_url: ["https://cdn-images.farfetch-contents.com/19/22/59/65/19225965_42106797_1000.jpg","https://cdn-images.farfetch-contents.com/19/22/59/65/19225965_42105759_1000.jpg","https://cdn-images.farfetch-contents.com/19/22/59/65/19225965_42106801_1000.jpg","https://cdn-images.farfetch-contents.com/19/22/59/65/19225965_42106801_1000.jpg"],
        seasons: "New Season",
        name: "Axel Arigato",
        description: "A-Dice high-top sneaker",
        price: `325`,
        highlights: ["calf leather","logo patch at the tongue","front lace-up fastening","flat sole"],
        composition: "Lining: Fabric 100%",
        productId: "FARFETCH ID: 19225965"
    },
    {
        image_url: ["https://cdn-images.farfetch-contents.com/19/06/56/83/19065683_41667153_1000.jpg","https://cdn-images.farfetch-contents.com/19/06/56/83/19065683_41667151_1000.jpg","https://cdn-images.farfetch-contents.com/19/06/56/83/19065683_41665569_1000.jpg","https://cdn-images.farfetch-contents.com/19/06/56/83/19065683_41667150_1000.jpg"],
        seasons: "New Season",
        name: "Raf Simons",
        description: "multi-panel lace-up sneakers",
        price: `1,101`,
        highlights: ["jet black/cream white","front lace-up fastening","round toe","chunky rubber sole"],
        composition: "Outer: Fabric 100%, Calf Leather 100%",
        productId: "FARFETCH ID: 19065683"
    },
    {
        image_url: ["https://cdn-images.farfetch-contents.com/18/28/69/65/18286965_39152156_1000.jpg","https://cdn-images.farfetch-contents.com/18/28/69/65/18286965_39152157_1000.jpg","https://cdn-images.farfetch-contents.com/18/28/69/65/18286965_39150545_1000.jpg","https://cdn-images.farfetch-contents.com/18/28/69/65/18286965_39150547_1000.jpg"],
        seasons: "New Season",
        name: "Stepney Workers Club",
        description: "Dellow S-Strike low-top sneakers",
        price: `177`,
        highlights: ["black/off-white","panelled design","logo patch at the tongue","front lace-up fastening"],
        composition: "Outer: Canvas 100%, Leather 100%",
        productId: "FARFETCH ID: 18286965"
    },
];

let shoe = document.getElementById("shoe");
shoe.onclick = ()=>{
    append(shoe_data);
}

let op = document.getElementById("op");
op.onclick = ()=>{
    wish_getData();
    let sub = document.getElementById("sub");
    sub.style.display = "none";
}

const wish_getData = async()=>{
    let res = await fetch(`https://infinite-fortress-00447.herokuapp.com/wishlist`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    let data = await res.json();
    append(data);
}