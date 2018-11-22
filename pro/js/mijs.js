
function insertarEnFila(){
  var cadena = document.getElementById('formu').value;

  var lista = document.getElementById('lista');
  var elemento = document.createElement("div");
  // elemento.innerHTML = ;

  //añade la cadena
  elemento.className = "secundario" //dar clase al elemento añadido
  darId(elemento); //le damos un id para poder localizarlo mas tarde
  elemento.setAttribute("style", "float: left");
  elemento.setAttribute("data-cadenaReal", cadena);
  // elemento.setAttribute("onclick", "leer("+"'"+elemento.id+"'"+")"); //se añade un evento 'onclick'
  elemento.onclick = function(){
    console.log(this.id);
    leer(this.id, );
  }
  lista.appendChild(elemento);
}

function darId(elemento){
  var cadena = document.getElementById('formu').value;
  var palabras = cadena.split(' ');
  var nombre = palabras[0];

  elemento.id=nombre;
  var str ="<span>"+nombre+"</span>" ;
  for (var i = 1; i < palabras.length; i++) {
    var color = palabras[i];
    str += "<span style='background:"+color+";width:20px;height:20px;border:1px solid black'></span>";
  }
  elemento.innerHTML = str;

}

function cambiarEstilo(c1, c2, cb, ct){
  var primario = document.getElementsByClassName("primario");
  var secundario = document.getElementsByClassName("secundario");
  var boton = document.getElementById("dale");

  var i;
  for (i = 0; i < primario.length; i++) {
    primario[i].style.backgroundColor = c1;
  }

  for (i = 0; i < secundario.length; i++) {
    secundario[i].style.backgroundColor = c2;
    secundario[i].style.color = ct;
  }
  boton.style.color = cb;
}

function leer(rowid){
  var cadena = document.getElementById(rowid);
  cadena= cadena.getAttribute("data-cadenaReal");
  var palabras = cadena.split(" ");
  var c1 = palabras[1];
  var c2 = palabras[2];
  var cb = palabras[3];
  var ct = palabras[4];

  cambiarEstilo(c1, c2, cb, ct);
}
