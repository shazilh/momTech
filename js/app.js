
function contenido(){
  var texto = document.getElementById("mensaje").value;
  document.getElementById("vistaPrevia").innerHTML = texto;
}

function textoSize(tamano){
  document.getElementById("vistaPrevia").style.fontSize = tamano.getAttribute("valor");
}

function colorTexto(){
  var colorHex = prompt("Brindame el color para cambiar el texto en HEXADECIMAL");
  colorHex = "#" + colorHex;
  document.getElementById("vistaPrevia").style.color = colorHex;
}

function colorTexto(){
  var colorHex = prompt("Brindame el color en HEXADECIMAL para cambiar el fondo");
  colorHex = "#" + colorHex;
  document.getElementById("vistaPrevia").style.backgroundColor = colorHex;
}

function alinearTexto(lugar) {
  document.getElementById("vistaPrevia").style.textAlign = lugar.getAttribute("valor");
}

function imagenUrl(){
  var nota = "Una vez que agregues la URL no podras escribir mas\n";
  nota += "¿DESEAS CONTINUAR? ( si / no )";
  var urlImagen = prompt(nota).toUpperCase();
  if(urlImagen == "SI"){
    urlImagen = prompt("Introduce la URL de la imagen \n Nota:");
    document.getElementById("mensaje").disabled = true;
    var imagen= document.createElement("img");
    imagen.setAttribute("src", urlImagen);
    imagen.setAttribute("height","70px");
    imagen.setAttribute("width", "85px");
    var comentario = document.getElementById("vistaPrevia");
    comentario.appendChild(imagen);
  }
}

var nuevaLista = 0;
function agregaLista(){
  var nota = "Una vez que agregues la LISTA no podras escribir mas\n";
  nota += "¿DESEAS CONTINUAR? ( si / no )";
  var elementos = prompt(nota).toUpperCase();
  if(elementos == "SI"){
    var lista = document.createElement("UL");
    nuevaLista++;
    document.getElementById("mensaje").disabled = true;
    elementos = parseInt(prompt("¿Cuántos elementos tendrá la lista?"));
    for (var i = 1; i <= elementos; i++) {
      var node = document.createElement("LI");
      var elemento = prompt("Elemento " + i + ":")
      var textnode = document.createTextNode(elemento);
      node.appendChild(textnode);
      lista.appendChild(node);
    }
    document.getElementById("vistaPrevia").appendChild(lista);
  }
}

function cancelar(){
  document.getElementById("mensaje").value = "";
  document.getElementById("vistaPrevia").innerHTML = "";
  document.getElementById("mensaje").disabled = false;
}

function publicar() {
  var parrafo = document.createElement("HR");
  var texto = document.getElementById("vistaPrevia").cloneNode(true);
  texto.id = "publicado";
  var enviar = document.getElementById("publicaciones");
  enviar.insertBefore(parrafo, enviar.childNodes[0]);
  enviar.insertBefore(texto, enviar.childNodes[0]);
  cancelar();
}

function borrar(){
  var comentarios = document.getElementById("publicaciones");
  if (comentarios.hasChildNodes()) {
    comentarios.removeChild(comentarios.childNodes[0]);
    comentarios.removeChild(comentarios.childNodes[0]);
  }
}
