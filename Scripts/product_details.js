let recommend_data = [
    {
        image_url: ["https://cdn-images.farfetch-contents.com/19/21/96/27/19219627_42198739_1000.jpg", "https://cdn-images.farfetch-contents.com/19/21/96/27/19219627_42199331_1000.jpg", "https://cdn-images.farfetch-contents.com/19/21/96/27/19219627_42200236_1000.jpg", "https://cdn-images.farfetch-contents.com/19/21/96/27/19219627_42198740_1000.jpg"],
        seasons: "New Season",
        name: "Rhude",
        description: "logo-print detail T-shirt",
        price: `370`,
        highlights: ["white/blue", "cotton", "logo print to the front", "round neck"],
        composition: "Cotton 100%",
        productId: "FARFETCH ID: 19219627",
        quantity: "1"
    },
    {
        image_url: ["https://cdn-images.farfetch-contents.com/18/90/37/16/18903716_41087054_1000.jpg", "https://cdn-images.farfetch-contents.com/18/90/37/16/18903716_41087056_1000.jpg", "https://cdn-images.farfetch-contents.com/18/90/37/16/18903716_41087058_1000.jpg", "https://cdn-images.farfetch-contents.com/18/90/37/16/18903716_41088078_1000.jpg"],
        seasons: "New Season",
        name: "Dion Lee",
        description: "lace up bell-sleeve blouse",
        price: `1240`,
        highlights: ["black", "semi-sheer construction", "V-neck", "front lace-up fastening"],
        composition: "Silk 100%",
        productId: "FARFETCH ID: 18903716",
        quantity: "1"
    },
    {
        image_url: ["https://cdn-images.farfetch-contents.com/18/04/17/94/18041794_38648000_1000.jpg", "https://cdn-images.farfetch-contents.com/18/04/17/94/18041794_38648009_1000.jpg", "https://cdn-images.farfetch-contents.com/18/04/17/94/18041794_38647603_1000.jpg", "https://cdn-images.farfetch-contents.com/18/04/17/94/18041794_38648002_1000.jpg"],
        seasons: "New Season",
        name: "Nanushka",
        description: "animal-print organic-cotton shirt",
        price: `764`,
        highlights: ["nude/dark brown", "organic cotton", "animal print", "front button fastening"],
        composition: "Organic Cotton 100%",
        productId: "FARFETCH ID: 18041794",
        quantity: "1"
    },
    {
        image_url: ["https://cdn-images.farfetch-contents.com/18/03/77/49/18037749_41625527_1000.jpg", "https://cdn-images.farfetch-contents.com/18/03/77/49/18037749_41468641_1000.jpg", "https://cdn-images.farfetch-contents.com/18/03/77/49/18037749_41467499_1000.jpg", "https://cdn-images.farfetch-contents.com/18/03/77/49/18037749_41467490_1000.jpg"],
        seasons: "New Season",
        name: "BOSS",
        description: "buckle-detail tote bag",
        price: `502`,
        highlights: ["black/white", "all-over logo print", "front zip fastening pockets", "single rounded top handle"],
        composition: "Polyester 100%",
        productId: "FARFETCH ID: 18037749",
        quantity: "1"
    }
];

let recommend = document.getElementById("recommended")
const re_data = (data) => {
    
    data.forEach(function (ele) {
        let card = document.createElement("div");
        card.setAttribute("class", "card");
       
        let image = document.createElement("img");
        image.src = ele.image_url[1];
        let name = document.createElement("p");
        name.innerText = ele.name;
        let description = document.createElement("p");
        description.innerText = ele.description;
        let price = document.createElement("p");
        price.innerText = "$"+(+ele.price)
        card.append(image, name, description, price,);
        recommend.append(card);

    })
}
re_data(recommend_data)



const getData = async () => {
    try {
      let res = await fetch(
        `https://infinite-fortress-00447.herokuapp.com/product/1`
      );
      let data = await res.json();
      console.log(data);
        append_data(data)
        console.log("get",data)
    } catch (error) {
      console.log(error);
    }
  };
  getData();

  let sizeGuide = document.getElementById("sizeGuide");
 
  let container = document.getElementById("container");

  const append_data = (data) => {
    container.innerHTML = null;
    let div1 = document.createElement("div");
    div1.setAttribute("class", "div1");
    let img1 = document.createElement("img");
      img1.src = data.image_url[0];
      

    let div2 = document.createElement("div");
    div2.setAttribute("class","div2")
      let img2 = document.createElement("img");
      img2.src = data.image_url[1];
      


    let img5 = document.createElement("img");
      img5.src = data.image_url[1];
      
    

    let img3 = document.createElement("img");
      img3.src = data.image_url[2];
     

    let img4 = document.createElement("img");
      img4.src = data.image_url[3];
      

    let div3 = document.createElement("div");
    div3.setAttribute("class","div3")
    let name = document.createElement("h3");
      name.innerText = data.name;
      name.setAttribute("class","name")
      
    let description = document.createElement("p");
    description.innerText = data.description;
    let price = document.createElement("p");
    price.innerText = "$" + +data.price;
    let imp = document.createElement("p");
    imp.innerText = "import duties included";
    

    let addtobag = document.createElement("button");
    addtobag.innerText = "Add To Bag";
    addtobag.setAttribute("class", "addtobag");
    addtobag.addEventListener("click",()=>{
        window.location.href = "cart.html"
        add_cart(data)
    })

    let wishbtn = document.createElement("button");
    wishbtn.innerHTML ="Wishlist"
   wishbtn.setAttribute("class","wishbtn")
   
    wishbtn.addEventListener("click",()=>{
      window.location.href="wishlist.html"
      wishbtn_data(data)
    })

    let delivery = document.createElement("p");
    delivery.innerHTML = "ESTIMATED DELIVERY";
    let date_d = document.createElement("p");
    date_d.innerHTML = "Within 3 Days";

    let div4 = document.createElement("div");
    div4.setAttribute("class","div4")
    let div5 = document.createElement("div");
    div5.setAttribute("class", "div5");
    let div6 = document.createElement("div");
    div6.setAttribute("class", "div6");
    let path1 = document.createElement("p");
    path1.innerHTML ="Home" + ">" ;
    let path2 = document.createElement("p");
    path2.innerText = data.name + " > ";
    let path3 = document.createElement("p");
    path3.innerText = data.description;

    // let div7 = document.createElement("div");
    // div7.setAttribute("class", "div7");
    let the_details = document.createElement("h3");
    the_details.innerText = "THE DETAILS";

    let div8 = document.createElement("div");
    div8.setAttribute("class","div8")
    let highlights=document.createElement("h4");
    highlights.innerText="Hightlights";
    let Li1=document.createElement("li");
    Li1.innerText=data.highlights[0];
    let Li2=document.createElement("li");
    Li2.innerText=data.highlights[1];
    let Li3=document.createElement("li");
    Li3.innerText=data.highlights[2];
    let Li4=document.createElement("li");
    Li4.innerText=data.highlights[3];

    let div9 =document.createElement("div");
    div9.setAttribute("class","div9");
    let composition = document.createElement("h4");
    composition.innerText="Composition";
    let a = document.createElement("p");
    a.innerText=data.composition

    let div10=document.createElement("div");
    div10.setAttribute("class",'div10')
    let productId=document.createElement("h4");
    productId.innerText="Product Id"
    let pid=document.createElement("p");
    pid.innerText=data.productId;


    div1.append(img1);

    div2.append(img2);

    div4.append(img3);
    div3.append(
      name,
      description,
      price,
      imp,
      sizeGuide,
      addtobag,
      wishbtn,
      delivery,
      date_d
    );

    div5.append(img4);
    div6.append(path1, path2, path3);
    // div7.append(the_details);
    div8.append(the_details,highlights,Li1,Li2,Li3,Li4)
    
    div9.append(composition,a,productId,pid)
    div10.append(img5)
    container.append(div1, div2, div3, div4, div5,div6, div8, div9,div10);
    
    // box2.append(div6,  div8,div9,div10);
  };
  





  

  const wishbtn_data =async(el)=>{
    try{
      let res = await fetch(`https://infinite-fortress-00447.herokuapp.com/wishlist`,{
        method:"POST",
        body:JSON.stringify(el),
        headers:{
          'Content-Type': 'application/json'
        }
      })
      let data = await res.json()
      console.log(data)
    }catch(error){
      console.log(error)
    }
}
const add_cart =async (el) => {
    let res = await fetch(`https://infinite-fortress-00447.herokuapp.com/cart`, {
        method: "POST",
        body: JSON.stringify(el),
        headers: {
            'Content-Type': 'application/json'
        }
       
    })
    let data = await res.json()
    console.log("bag:",data)
}