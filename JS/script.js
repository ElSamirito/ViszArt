function mostrar(dni){
    incol = document.getElementById(dni);
    
    incol.style.display = "block";
};

function ocultar(dni){
    incol = document.getElementById(dni);
    
    incol.style.display = "none";
};

window.onscroll = function(){scrollear()};

function scrollear(){
    title = document.getElementById("VZ");
    logo = document.getElementById("logoVZ");
    he = document.getElementsByTagName("header");
    hea = document.getElementsByClassName("headerItem");

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

/*
window.addEventListener("resize", responsivo());

function responsivo() {
    if (window.outerWidth <= 1280) {
        ocultar("headerUl")
    }
}
*/
//por debajo de 1280 de ancho