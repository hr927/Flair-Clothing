

const getData = async () => {
    try {
      let res = await fetch(
        `https://infinite-fortress-00447.herokuapp.com/product/1`
      );
      let data = await res.json();
      console.log(data);
      append_data(data)
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
    var name = document.createElement("h3");
    name.innerText = data.name;
    var description = document.createElement("p");
    description.innerText = data.description;
    let price = document.createElement("p");
    price.innerText = "$" + +data.price;
    let imp = document.createElement("p");
    imp.innerText = "import duties included";
    
//add to bag function
    let addtobag = document.createElement("button");
    addtobag.innerText = "Add To Bag";
    addtobag.setAttribute("class", "addtobag");
    addtobag.addEventListener("click",()=>{
      window.location.href="cart.html"
    })

    let whishbtn = document.createElement("button");
    whishbtn.innerHTML ="Whislist"
   whishbtn.setAttribute("class","whishbtn")
   whishbtn.style.width="20%"
      whishbtn.addEventListener("click", () => {
        
      window.location.href="wishlist.html"
      whishbtn_data(data)
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
    path1.innerText = " Home > ";
    let path2 = document.createElement("p");
    path2.innerText = data.name + ">";
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
      whishbtn,
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
  










  

  const whishbtn_data =async(el)=>{
    try{
      let res = await fetch(`https://infinite-fortress-00447.herokuapp.com/wishlist1`,{
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