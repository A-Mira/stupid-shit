var i = 1;

function addTask(){
  var contenido = document.getElementById("formu").value;
  if (contenido == ""){
    alert("TAREA VACIA");
  }else{
  var descripcion = document.getElementById("desc").value;
  var tareas = document.getElementById("tareas");
  var elemento = document.createElement("div");
  elemento.className = "tarea";
  darId(elemento);

  var str ="<div class='titulo'>" + contenido;
  str += "<button class='doneButton' onclick='addDone("+elemento.id+")'>Done</button>";
  str += "<button class='doneButton' onclick='showDes("+elemento.id+");'>Descripción</button></div>"
  str += "<div class='description'>" + descripcion + "</div>";
  // str += "<button class='doneButton' onclick='unshowDes("+elemento.id+");'>Cerrar</button> </div>"
  elemento.innerHTML = str;
  tareas.appendChild(elemento);
  document.getElementById("formu").value = "";
  document.getElementById("desc").value = "";
  }
}

function darId(elemento){
  elemento.id = i;
  i++;
}

function addDone(elementId){
  var lista = document.getElementById("done");
  var tarea = document.getElementById(elementId).getElementsByClassName("titulo")[0];
  var element = document.createElement("div");
  element.className = "tarea";
  var contenido = tarea.innerHTML.split("<");
  element.innerHTML = contenido[0];
  lista.appendChild(element);
  tarea.parentNode.removeChild(tarea);
}

function delDone(){
   document.getElementById("done").innerHTML = "";
}

function showDes(elementId){
  var tarea = document.getElementById(elementId);
  var description = tarea.getElementsByClassName("description")[0];
  description.classList.toggle("show");
  // description.style.display = "block";
  // tarea.style.height = "42px";
}

function unshowDes(elementId){
  var tarea = document.getElementById(elementId);
  var description = tarea.getElementsByClassName("description")[0];
  description.style.display = "none";
  tarea.style.height = "21px";
}
