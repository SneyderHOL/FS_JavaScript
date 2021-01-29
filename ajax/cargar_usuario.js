const bodyUsuario = document.getElementById('body_usuarios');
let usuario = {};

function tomarDatosUrl() {
    return location.search.replace('?', '').split('=')[1];
}

function render () {
    const usuarioRender = `<tr>
                        <td>${usuario.nombre ? usuario.nombre : 'vacio'}</td>
                        <td>${usuario.apellido ? usuario.apellido : 'vacio'}</td>
                        <td>${usuario.pais ? usuario.pais : 'vacio'}</td>
                        </tr>`;
    console.log(usuarioRender);
    bodyUsuario.innerHTML = usuarioRender;
  }

function obtenerUsuario () {
    fetch(`https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios/${tomarDatosUrl()}`)
    .then(response => response.json())
    .then(respUsuario => {
        console.log('respuestaUsuario', respUsuario);
        usuario = respUsuario;
        render();
    })
}
obtenerUsuario();