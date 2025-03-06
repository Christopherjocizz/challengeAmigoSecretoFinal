//Array para almacenar los nombres
let amigos = [];
//Función para agregar amigos
function agregarAmigo (){
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value.trim();

//Validar que el campo no esté vacío
    if (nombreAmigo === "" ) {
    alert ("Por favor, inserte un nombre.");
    return;
}
//Validar que el nombre no se repita
    if (amigos.includes (nombreAmigo)) {
    alert (`El nombre ${nombreAmigo} esta repetido, por favor ingrese otro nombre`);
    return;
}
//Actualizar el array
    amigos.push(agregarAmigo);
    
//Limpiar el campo de entrada
agregarAmigo.value = "";
//Actualizar el array en el index.html y ver los nombres que se agregan en el prompt
actualizarLista()
//Función para actualizar la lista de amigos

}