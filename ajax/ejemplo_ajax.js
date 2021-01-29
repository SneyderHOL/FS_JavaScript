const listaUsuarios = document.getElementById('lista_usuarios');
const boton = document.getElementById('boton');

function reqListener () {
  const usuarios = JSON.parse(this.responseText);
  console.log(usuarios);
  const usuariosRender = usuarios
    .map(usuario => `<li>${usuario.nombre}</li>`)
    .join("");
  console.log(usuariosRender);
  listaUsuarios.innerHTML = usuariosRender;
}
var peticion = new XMLHttpRequest();
peticion.addEventListener("load", reqListener);

function enviarDatos() {
  peticion.open(
    "POST",
    "https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios",
    true
    );
  //peticion.open('POST', "http://localhost:3000/users", true);
  peticion.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  peticion.send("nombre=DOMINGO23");
  setTimeout(refrescar, 3000);
}

function refrescar () {
  peticion.open("GET", "https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios");
  //peticion.open("GET", "http://localhost:3000/users");
  peticion.send();
}
boton.onclick = enviarDatos;