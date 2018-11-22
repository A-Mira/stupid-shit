var sumaClick = 1;
var sumaCursor = 0.1;
var sumaWonka = 1;

setInterval(function addCPS(){
  var numero = document.getElementById("number").innerHTML;
  var cps = document.getElementById("cps").innerHTML;
  numero = (parseFloat(numero) + parseFloat(cps)).toFixed(1);
  document.getElementById("number").innerHTML = numero;
}, 1000);


function cClick(){
  var numero = document.getElementById("number").innerHTML;
  numero = parseFloat(numero) + sumaClick;
  document.getElementById("number").innerHTML = numero.toFixed(1);

  // var elem = document.getElementById("bigcandy");
  // var w = 20;
  // var low = "true";
  // var id = setInterval(frame, 5);
  // function frame() {
  //   if (low == "true"){
  //     w = w - 1;
  //     elem.style.width = w+'%'
  //     if (w <= 10) {
  //       low = "false";
  //     }
  //   }else{
  //     w = w +1;
  //     elem.style.width = w+'%'
  //     if (w>=20) {
  //       clearInterval(id);
  //     }
  //   }
  // }
}


function buyCursor(){
  var candies = parseFloat(document.getElementById("number").innerHTML);
  var cps = parseFloat(document.getElementById("cps").innerHTML);
  var numero = parseInt(document.getElementById("nCursores").innerHTML);
  var precio = parseFloat(document.getElementById("pCursor").innerHTML);

  if (candies >= precio) {
    candies = candies - precio;
    numero++;
    cps = cps + sumaCursor;
    precio = precio * 1.1;


    document.getElementById("number").innerHTML = candies.toFixed(1);
    document.getElementById("cps").innerHTML = cps.toFixed(1);
    document.getElementById("nCursores").innerHTML = numero;
    document.getElementById("pCursor").innerHTML = precio.toFixed(1);
  }
}

function buyWonka(){
  var candies = parseFloat(document.getElementById("number").innerHTML);
  var cps = parseFloat(document.getElementById("cps").innerHTML);
  var numero = parseInt(document.getElementById("nWonkas").innerHTML);
  var precio = parseFloat(document.getElementById("pWonka").innerHTML);

  if (candies >= precio) {
    candies = candies - precio;
    numero++;
    cps = cps + sumaWonka;
    precio = precio * 1.1;


    document.getElementById("number").innerHTML = candies.toFixed(1);
    document.getElementById("cps").innerHTML = cps.toFixed(1);
    document.getElementById("nWonkas").innerHTML = numero;
    document.getElementById("pWonka").innerHTML = precio.toFixed(1);
  }
}
