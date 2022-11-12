import navbar from "../Components/navbar.js";
let navdiv=document.querySelector("#navbar")
navdiv.innerHTML=navbar()


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

import footer from "../Components/footer.js";
let footerdiv = document.querySelector("#footer");
footerdiv.innerHTML=footer();
