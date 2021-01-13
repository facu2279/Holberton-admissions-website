document.addEventListener("DOMContentLoaded", function(event) {

var thumbnailElement = document.getElementById("smart_thumbnail");

thumbnailElement.addEventListener("click", function() {
if (thumbnailElement.className=="")
thumbnailElement.className="small";
else
thumbnailElement.className="";
});
});





function agrandar(foto, texto){

document.getElementById(foto).className="agrandar";
document.getElementById(texto).className="mostrar";

}
function achicar(foto,texto){

document.getElementById(foto).className="galeria";
document.getElementById(texto).className="ocultar";
}

function mostrartexto(foto,texto){

document.getElementById(foto).className="fotoinfo2";
document.getElementById(texto).className="mostrarbio";
}
function ocultartexto(foto,texto){

document.getElementById(foto).className="fotoinfo";
document.getElementById(texto).className="ocultarbio";
}
function agrandarachicar(foto){

}