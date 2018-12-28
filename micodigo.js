function mostrarAlerta(){
  alert('hizo click');
}
function hacerClick() {
  // document.getElementsByTagName('p')[0].onclick=mostrarAlerta;
  var lista = document.querySelectorAll("#principal p");
  lista[0].onclick=mostrarAlerta;
}
window.onload=hacerClick;
