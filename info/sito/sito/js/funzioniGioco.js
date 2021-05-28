var nStrumenti = 6;
var nBattiti =8 ;
var strumenti = new Array(nStrumenti);
var matriceSuoni = new Array(nBattiti);
var tactus = 0;
var slider = document.getElementById("PBM");

var tema = ["rgb(230, 220, 85)","rgb(255, 166, 0)","1px solid rgba(255, 255, 255, 0.2)"];

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("barraSuperiore").style.top = "0";
  } else {
    document.getElementById("barraSuperiore").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};

function starta() {
  let suoni = ["HI-HAT CHIUSI", "CLAP", "HI-HAT APERTI", "KICK", "TOM", "808"];
  let body = document.getElementById("tabella");
  body.style =
    "position: absolute;top: 50%;left: 50%;-webkit-transform: translate(-50%, -50%);transform: translate(-50%, -50%);";
  let tbl = document.createElement("table");
  tbl.style =
    "width: 800px;border-collapse: collapse;overflow: hidden;box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);";

  let tbdy = document.createElement("tbody");
  for (let i = 0; i < nStrumenti; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < nBattiti + 1; j++) {
      let td = document.createElement("td");
      if (j == 0) {
        td.innerHTML = suoni[i];
        td.style =
          "width: 200px;text-align:center ;padding: 15px;background-color: rgba(255, 255, 255, 0.2);color: #fff;text-shadow: 1px 1px 1px #000;";
      } else {
        td.innerHTML = "";
        td.id = i + "_" + j;
        td.style =
          "border: 1px solid orange;background-color: #e6dc55;b";
        td.onclick = eventoBottone;
      }
      tr.appendChild(td);
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl);

  for (let n = 0; n < nBattiti; n++) {
    matriceSuoni[n] = new Array(nStrumenti);
    for (let temp = 0; temp < nStrumenti; temp++) {
      matriceSuoni[n][temp] = 0;
    }
  }

  settaStrumenti();
  let bottoni = document.getElementById("bottoni");
  bottoni.style.marginTop = "550px";
  bottoni.style.marginLeft = "25%";
}

function settaStrumenti() {
  strumenti[0] = new Audio("../suoni/HiHatAperti.wav");
  strumenti[1] = new Audio("../suoni/Clap.wav");
  strumenti[2] = new Audio("../suoni/HiHatChiusi.wav");
  strumenti[3] = new Audio("../suoni/Kick.wav");
  strumenti[4] = new Audio("../suoni/tom.wav");
  strumenti[5] = new Audio("../suoni/808F.wav");
}

function eventoBottone(click) {
  let oggetto = click.toElement;
  let cord = oggetto.id.split("_");
  if (oggetto.style.backgroundColor == tema[0]) {
    oggetto.style.backgroundColor = tema[1];
    matriceSuoni[cord[1] - 1][cord[0]] = 1;
  } else {
    oggetto.style.backgroundColor = tema[0];
    matriceSuoni[cord[1] - 1][cord[0]] = 0;
  }
  strumenti[cord[0]].pause();
  strumenti[cord[0]].currentTime = 0;
  strumenti[cord[0]].play();
}

function suona() {
  for (let strumento = 0; strumento < nStrumenti; strumento++) {
    if (matriceSuoni[tactus][strumento] == 1) {
      strumenti[strumento].pause();
      strumenti[strumento].currentTime = 0;
      strumenti[strumento].play();
    }
  }
  tactus++;
  if (tactus == nBattiti) tactus = 0;
}
var staSuonando = false;
function parti() {
  nome = document.getElementById("txtNickname").value;
  if (nome != "") {
    if (!staSuonando) {
      staSuonando = true;
      suono = setInterval(suona, tempo);
    }
  } else {
    document.getElementById("txtNickname").placeholder = "inserire";
  }
}
function stoppa() {
  if (staSuonando) {
    staSuonando = false;
    clearInterval(suono);
    tactus = 0;
  }
}
var tempo = 500;
var suono = setInterval(suona, tempo);
clearInterval(suono);

function cambiaTactus(valore) {
  tempo = Math.floor(60000 / valore);
  //console.log(valore + "->" + tempo);
}

function cambiaTema(_tema) {

  if (_tema == "solare"){
    tema = ["rgb(230, 220, 85)","rgb(255, 166, 0)","1px solid orange"]
  }else{
    tema = ["white","black","1px solid grey"]
  }
  
  for (let n = 0; n < nStrumenti; n++) {
    for (let temp = 0; temp < nBattiti; temp++) {
      console.log(matriceSuoni[temp][n])
      document.getElementById(n  +"_"+(temp+1)).style.backgroundColor = tema[matriceSuoni[temp][n]];
      document.getElementById(n  +"_"+(temp+1)).style.border = tema[2]
    
    }
  }
  
  
}
