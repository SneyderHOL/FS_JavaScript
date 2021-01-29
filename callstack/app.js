function obtenerNombre() {
  return "John";
}

function obtenerApellido() {
  return "Black";
}

function obtenerNombreCompleto() {
  const nombre = obtenerNombre();
  const apellido = obtenerApellido();
  return `${nombre} ${apellido}`
}

const nombreCompleto = obtenerNombreCompleto();
console.log(nombreCompleto);
