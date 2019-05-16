function iniciar(){  
var imagenes=document.querySelectorAll('#cajaimagenes > img');
for(var i=0; i<imagenes.length; i++){
	imagenes[i].addEventListener('dragstart', arrastrado, false);
}  
soltar=document.getElementById('cajasoltar');  
//función para detectar cuando el ratón entra en la zona de soltar
soltar.addEventListener('dragenter', function(e){ e.preventDefault(); }, false);  
//función para detectar que el ratón ha entrado en la zona destino
soltar.addEventListener('dragover', function(e){ e.preventDefault(); }, false);
//para detectar que el archivo origen ha sido soltado en la zona destino
soltar.addEventListener('drop', soltado, false);
}
function arrastrado(e){  elemento=e.target;  
e.dataTransfer.setData('Text', elemento.getAttribute('id'));
}
//función para almacenar el nombre del arch
function soltado(e){  e.preventDefault();  
var id=e.dataTransfer.getData('Text');
if(id!="imagen4"){    var src=document.getElementById(id).src;    
soltar.innerHTML='<img src="'+src+'">';
}
else{    soltar.innerHTML='la imagen no es admitida';}}
window.addEventListener('load', iniciar, false);// JavaScript Document