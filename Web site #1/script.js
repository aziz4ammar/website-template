// Highlight Current Page link in the Navbar
document.addEventListener('DOMContentLoaded', () => {
const $navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-link'), 0);

if ($navLinks.length > 0) {
  $navLinks.forEach( el => {
    if(window.location.pathname == el.getAttribute("href")){
       el.className += " current";
    }
  })
}
});
// End of Highlight Current Page link in the Navbar
var hert = document.querySelector('#bh');
    hert.addEventListener('click', lke);
function lke(e) {
    var det=document.querySelector('#pap')
    var cible=e.target
    if(cible=true){
        det.style.background="red"
        det.style.color="white"
    }
}
var her = document.querySelector('#bn');
    her.addEventListener('click', dke);
function dke(e) {
    var det=document.querySelector('#pap')
    var cib=e.target
    if(cib=true){
        det.style.background="white"
        det.style.color="red"
    }
}