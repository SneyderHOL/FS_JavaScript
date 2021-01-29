const bodyUsuarios = document.getElementById("body_usuarios");
const indiceInput = document.getElementById("indice");
const nombreCampo = document.getElementById("nombre");
const apellidoCampo = document.getElementById("apellido");
const paisCampo = document.getElementById("pais");
const boton = document.getElementById("boton");
const botonLimpiar = document.getElementById("limpiar");
let usuarios = [];
const urlPagina = "form2.html";
const url = 'https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios';

function render() {
  const renderElementos = usuarios.map((usuario, indice) => {
    return `<tr><td>${usuario.nombre ? usuario.nombre : 'vacio'}</td>
            <td>${usuario.apellido ? usuario.apellido : 'vacio'}</td>
            <td>${usuario.pais ? usuario.pais : 'vacio'}</td>
            <td><a class="ver_usuario" href="${urlPagina}?usuario=${indice}/">Ver</a></td>
            <td><button class="editar_usuario" data-indice="${indice}">Editar</button></td>
            <td><button class="eliminar_usuario" data-indice="${indice}">Eliminar</button></td></tr>`;
  }).join("")
  bodyUsuarios.innerHTML = renderElementos;
}

function obtenerUsuarios() {
  fetch('https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios')
  .then(response => response.json())
  .then(listaUsuario => {
    usuarios = listaUsuario;
  render();
  });
}

function limpiar() {
  boton.innerText = "Crear";
}

botonLimpiar.onclick = limpiar;
obtenerUsuarios();
