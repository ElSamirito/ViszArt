function mostrar(dni, manera){
    incol = document.getElementById(dni);
    
    incol.style.display = manera;
};

window.onscroll = function(){scrollear()};

function scrollear(){
    const title = document.getElementById("VZ");
    const logo = document.getElementById("logoVZ");
    const he = document.getElementsByTagName("header");
    const hea = document.getElementsByClassName("headerItem");

    if (document.documentElement.scrollTop > 50) {

        title.style.fontSize="30px";
        logo.style.width="67%";
        he[0].style.height="67px";
        he[0].style.borderBottom = "1px solid lightgrey";

        for (const elem in hea) {
            hea[elem].style.fontSize="16px";
        }
    } else {

        title.style.fontSize="45px";
        logo.style.width="100%";
        he[0].style.height="100px";
        he[0].style.borderBottom = "none";

        for (const elem in hea) {
            hea[elem].style.fontSize="21px";
        }
    };
};

var acc = document.getElementsByClassName("proj-btn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    
    this.classList.toggle("activo");

    var projProcess = this.nextElementSibling;
    
    if (projProcess.style.display === "flex") {
        projProcess.style.display = "none";
    } else {
        projProcess.style.display = "flex";
    }
    
    if (projProcess.style.maxHeight) {
        projProcess.style.maxHeight = null;
    } else {
        projProcess.style.maxHeight = projProcess.scrollHeight + "px";
    }
  });
}