function calcular(atributo){
  var valor = parseInt(document.getElementById(atributo).value);
  var bonif = document.getElementById('bono'+atributo).innerHTML;
  var bono = (valor-10)/2;
  if(bono <0){
    bono = bono.toFixed(0);
  }else{
    bono = parseInt(bono);
  }
  document.getElementById('bono'+atributo).innerHTML = bono.toString();
  if (atributo != "constitucion"){
    if (atributo == "fuerza") {
      document.getElementById("atle").innerHTML = bono;
    }
    if (atributo == "agilidad") {
      document.getElementById("acro").innerHTML = bono;
      document.getElementById("tman").innerHTML = bono;
      document.getElementById("sigi").innerHTML = bono;
    }
    if (atributo == "inteligencia") {
      document.getElementById("arca").innerHTML = bono;
      document.getElementById("hist").innerHTML = bono;
      document.getElementById("inve").innerHTML = bono;
      document.getElementById("natu").innerHTML = bono;
      document.getElementById("reli").innerHTML = bono;
    }
    if (atributo == "sabiduria") {
      document.getElementById("anim").innerHTML = bono;
      document.getElementById("busc").innerHTML = bono;
      document.getElementById("medi").innerHTML = bono;
      document.getElementById("perc").innerHTML = bono;
      document.getElementById("surv").innerHTML = bono;
    }
    if (atributo == "carisma") {
      document.getElementById("enga").innerHTML = bono;
      document.getElementById("inti").innerHTML = bono;
      document.getElementById("estl").innerHTML = bono;
      document.getElementById("pers").innerHTML = bono;
    }
  }
}

function roll(n){
  var tirada = Math.floor(Math.random() * Math.floor(n)+1);
  document.getElementById("panel").innerHTML="<p>Has tirado un dado de "+n+" caras. El resultado es: "+tirada;
}
