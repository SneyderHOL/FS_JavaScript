const listaUsuarios = document.getElementById('body_usuarios');
const boton = document.getElementById('boton');
const limpiar = document.getElementById('limpiar');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const pais = document.getElementById('pais');
const indice = document.getElementById('indice');
let usuarios = [];
let botonesEliminar = null;
let botonesEditar = null;

function render () {
  const usuariosRender = usuarios
    .map((usuario, indice) => `<tr>
    <td>${usuario.nombre ? usuario.nombre : 'vacio'}</td>
    <td>${usuario.apellido ? usuario.apellido : 'vacio'}</td>
    <td>${usuario.pais ? usuario.pais : 'vacio'}</td>
    <td><a class="ver" href="index2.html?usuario=${indice}">Ver</a></td>
    <td><button class="editar" data-indice=${indice}>Editar</button></td>
    <td><button class="eliminar" data-indice=${indice}>Eliminar</button></td>
    </tr>`)
    .join("");
  console.log(usuariosRender);
  listaUsuarios.innerHTML = usuariosRender;
  botonesEliminar = document.getElementsByClassName('eliminar');
  botonesEditar = document.getElementsByClassName('editar');
  Array.from(botonesEliminar).forEach(boton => {
    boton.onclick = eliminarUsuario;
  });
  Array.from(botonesEditar).forEach(boton => {
    boton.onclick = editarUsuario;
  });
}

function enviarDatos(ev) {
  let accion = ev.target.innerText;
  ev.preventDefault();
  const datos = {
    nombre: nombre.value,
    apellido: apellido.value,
    pais: pais.value
  };
  let url = null;
  let method = null;
  if (accion == 'Crear') {
    url = 'https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios';
    method = "POST";
  } else if (accion == 'Editar') {
    if (indice.value) {
      url = `https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios/${indice.value}`;
      method = "PUT";
    } else {
      return;
    }
  } else {
    return;
  }

  fetch(url, {
    method: method,
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  })
  .then(response => response.json())
  .then(respJson => {
      console.log('resJson:', respJson);
      refrescar();
  })
}

function eliminarUsuario(ev) {
  ev.preventDefault();
  console.log('eliminar usuario', ev);
  fetch(`https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios/${ev.target.dataset.indice}`, {
    method: 'DELETE'
  })
  .then(response => response.json())
  .then(respJson => {
      console.log('resJson:', respJson);
      refrescar();
      restaurarBoton();
  })
  .catch((razon) => {
    console.log(razon);
    restaurarBoton();
  })
}

function editarUsuario(ev) {
  ev.preventDefault();
  console.log('editar usuario', ev);
  if(ev.target.dataset.indice) {
    const usuario = usuarios[ev.target.dataset.indice];
    nombre.value = usuario.nombre ? usuario.nombre : '';
    apellido.value = usuario.apellido ? usuario.apellido : '';
    pais.value = usuario.pais ? usuario.pais : '';
    indice.value = ev.target.dataset.indice;
    boton.innerText = "Editar";
  } else {
    boton.innerText = "Crear";
  }
}

function refrescar () {
    fetch('https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios')
    .then(response => response.json())
    .then(respUsuario => {
        console.log(respUsuario);
        usuarios = respUsuario;
        render();
    })
}

function restaurarBoton () {
  boton.innerText = "Crear";
  nombre.value = '';
  indice.value = '';
  apellido.value = '';
  pais.value = '';
}
boton.onclick = enviarDatos;
refrescar();
limpiar.onclick = restaurarBoton;
