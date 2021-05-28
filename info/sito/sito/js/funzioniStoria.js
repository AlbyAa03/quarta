
function inizio(){

  let img1  = document.getElementsByTagName("img")[1]
  let img2 = document.getElementsByTagName("img")[2]
  let img3  = document.getElementsByTagName("img")[3]
  img2.style.paddingTop = (parseInt(img1.style.paddingTop)+50) +"px";
  img3.style.paddingTop = (parseInt(img2.style.paddingTop)) +"px";
  
  document.getElementsByTagName("p")[1].style.paddingTop = img1.style.paddingTop
  
  let testo1 = document.getElementsByTagName("p")[0]
  let testo2 = document.getElementsByTagName("p")[1]
  let testo3 = document.getElementsByTagName("p")[3]
  testo1.style.paddingTop = parseInt(img1.style.paddingTop)+10+"px"
  testo2.style.paddingTop = parseInt(img2.style.paddingTop)+50+"px"
  testo3.style.paddingTop = parseInt(img3.style.paddingTop)-70+"px"
  console.log(testo3.style.paddingTop)
}


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("barraSuperiore").style.top = "0";
  } else {
    document.getElementById("barraSuperiore").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
  //console.log("blur("+Math.floor(currentScrollPos/50)+"px)")
  document.getElementById("immagineIniziale").style.filter = "blur("+currentScrollPos/100+"px)";

  let img1  = document.getElementsByTagName("img")[1]
  let img2  = document.getElementsByTagName("img")[2]
  let img3  = document.getElementsByTagName("img")[3]
  
  img1.style.opacity = (currentScrollPos-100+parseInt(img1.style.paddingTop))/700
  img2.style.opacity = (currentScrollPos-800+parseInt(img2.style.paddingTop))/700
  img3.style.opacity = (currentScrollPos-2100+parseInt(img3.style.paddingTop))/700
  
  
}