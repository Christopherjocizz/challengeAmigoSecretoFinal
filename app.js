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
    amigos.push(nombreAmigo);
    
//Limpiar el campo de entrada
inputAmigo.value = "";
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
    listaAmigos.appendChild(li);
}
}
//Función para sortear los amigos
function sortearAmigo(){
//Validar que haya amigos disponibles
if (amigos.length < 2){//Se comprueba que el array no este vacio
    alert ("No ingreso ningun nombre. Por favor ingrese al menos 2 nombres para el sorteo ");
    return;
}
//Gererar un índice aleatorio
let indiceAleatorio = Math.floor (Math.random()*amigos.length); /*
Math.random() genera un número decimal entre 0 y 1 (ejemplo: 0.7632).
Math.random() * frutas.length multiplica ese número por la cantidad de elementos en el array (si hay 4 elementos, será entre 0 y 3.999).
Math.floor() redondea hacia abajo para obtener un número entero válido (entre 0 y 3).*/
let nombreSorteado = amigos[indiceAleatorio]; // Obtener el nombre sorteado:
//Mostrar el resultado
let resultado = document.getElementById("resultado");
resultado.innerHTML = `Amigo sorteado: ${nombreSorteado}`;
}