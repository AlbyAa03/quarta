var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("barraSuperiore").style.top = "0";
  } else {
    document.getElementById("barraSuperiore").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}


function passatoSuIcona(id,inv){
  document.getElementById(id).style.filter = "invert("+ inv+")"
}