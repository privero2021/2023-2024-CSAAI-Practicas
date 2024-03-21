//-- Elementos de la gui
const gui = {
    display : document.getElementById("display"),
    start : document.getElementById("start"),
    stop : document.getElementById("stop"),
    reset : document.getElementById("reset"),
    
    a : document.getElementById("a"),
    b : document.getElementById("b"),
    c : document.getElementById("c"),
    d : document.getElementById("d"),

    cero : document.getElementById("0"),
    uno : document.getElementById("1"),
    dos : document.getElementById("2"),
    tres : document.getElementById("3"),
    cuatro : document.getElementById("4"),
    cinco : document.getElementById("5"),
    seis : document.getElementById("6"),
    siete : document.getElementById("7"),
    ocho : document.getElementById("8"),
    nueve : document.getElementById("9")
}

console.log("Ejecutando JS...");


//---- Conseguir los números de la clave secreta
//-- Array que almacena números secretos
const clave = [];

//-- Generar números aleatorios con un valor máximo
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//-- Generamos números secretos y los almacenamos en un array
for (let i = 0; i < 4; i++) {
    let rnum = getRandomInt(10);
    clave.push(rnum.toString());
}

//-- Mostramos el contenido del array de números secretos en la consola
for (let j = 0; j < clave.length; j++) {
    console.log( j + ' Secret Key ' + clave[j]);
}

gui.cero.onclick = () => {
    crono.start
    if (clave[0] === "0"){
        gui.a.textContent = clave[0];
        gui.a.style.color = "purple";
    }
}




//-- Definir un objeto cronómetro
const crono = new Crono(gui.display);

//---- Configurar las funciones de retrollamada

//-- Arranque del cronometro
gui.start.onclick = () => {
    console.log("Start!!");
    crono.start();
}
  
//-- Detener el cronómetro
gui.stop.onclick = () => {
    console.log("Stop!");
    crono.stop();
}

//-- Reset del cronómetro
gui.reset.onclick = () => {
    console.log("Reset!");
    crono.reset();
}