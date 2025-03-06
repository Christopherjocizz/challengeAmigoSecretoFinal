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
}
//Función para actualizar la lista de amigos
function actualizarLista (){
    let listaAmigos = document.getElementById("listaAmigos");
//Limpiar la lista existente
    listaAmigos.innerHTML = "";
//Recorrer el array
for (let amigo of amigos){
    let li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
}
}
//Función para sortear los amigos
function sortearAmigo(){
//Validar que haya amigos disponibles
if (amigos.length === 0){//Se comprueba que el array no este vacio
    alert ("No ingreso ningun nombre. Por favor ingrese al menos 2 nombres para el sorteo ");
    return;
}
//Gererar un índice aleatorio
}