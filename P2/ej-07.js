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


//---- Conseguir los números de la clave secreta ----

//-- Array que almacena números secretos
const clave = [];

//-- Generar números aleatorios con un valor máximo
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//-- Generamos números secretos y los almacenamos en un array
for (let i = 0; i < 4; i++) {
    let rnum = getRandomInt(10);
    clave.push(rnum.toString()); //-- SE COMPARA CON TEXTO
}

//-- Mostramos el contenido del array de números secretos en la consola
for (let j = 0; j < clave.length; j++) {
    console.log( j + ' Secret Key ' + clave[j]);
}


//---- Cambiar * cuando sea número de la clave ----

//-- Botón 0
gui.cero.onclick = () => {
    crono.start();
    console.log("Click en 0");
    for (let i = 0; i < 4; i++) {
        if (clave[i] === "0") {
            switch (i) {  //-- Realiza una serie de comparaciones múltiples en función del valor
                          //-- de una expresión. Verifica todas las posiciones del array
                          //-- y muestra los números coincidentes
                case 0: //-- Actúan como un if (clave[0] === "0") por separado
                    gui.a.textContent = 0;
                    gui.a.style.color = "pink";
                    break;
                case 1:
                    gui.b.textContent = 0;
                    gui.b.style.color = "pink";
                    break;
                case 2:
                    gui.c.textContent = 0;
                    gui.c.style.color = "pink";
                    break;
                case 3:
                    gui.d.textContent = 0;
                    gui.d.style.color = "pink";
                    break;
            }
        }
    }
}

//-- Botón 1
gui.uno.onclick = () => {
    crono.start();
    console.log("Click en 1");
    for (let i = 0; i < 4; i++) {
        if (clave[i] === "1") {
            switch (i) {
                case 0:
                    gui.a.textContent = 1;
                    gui.a.style.color = "pink";
                    break;
                case 1:
                    gui.b.textContent = 1;
                    gui.b.style.color = "pink";
                    break;
                case 2:
                    gui.c.textContent = 1;
                    gui.c.style.color = "pink";
                    break;
                case 3:
                    gui.d.textContent = 1;
                    gui.d.style.color = "pink";
                    break;
            }
        }
    }
}

//-- Botón 2
gui.dos.onclick = () => {
    crono.start()
    console.log("Click en 2");
    for (let i = 0; i < 4; i++) {
        if (clave[i] === "2") {
            switch (i) {
                case 0:
                    gui.a.textContent = 2;
                    gui.a.style.color = "pink";
                    break;
                case 1:
                    gui.b.textContent = 2;
                    gui.b.style.color = "pink";
                    break;
                case 2:
                    gui.c.textContent = 2;
                    gui.c.style.color = "pink";
                    break;
                case 3:
                    gui.d.textContent = 2;
                    gui.d.style.color = "pink";
                    break;
            }
        }
    }
}

//-- Botón 3
gui.tres.onclick = () => {
    crono.start()
    console.log("Click en 3");
    for (let i = 0; i < 4; i++) {
        if (clave[i] === "3") {
            switch (i) {
                case 0:
                    gui.a.textContent = 3;
                    gui.a.style.color = "pink";
                    break;
                case 1:
                    gui.b.textContent = 3;
                    gui.b.style.color = "pink";
                    break;
                case 2:
                    gui.c.textContent = 3;
                    gui.c.style.color = "pink";
                    break;
                case 3:
                    gui.d.textContent = 3;
                    gui.d.style.color = "pink";
                    break;
            }
        }
    }
}

//-- Botón 4
gui.cuatro.onclick = () => {
    crono.start()
    console.log("Click en 4");
    for (let i = 0; i < 4; i++) {
        if (clave[i] === "4") {
            switch (i) {
                case 0:
                    gui.a.textContent = 4;
                    gui.a.style.color = "pink";
                    break;
                case 1:
                    gui.b.textContent = 4;
                    gui.b.style.color = "pink";
                    break;
                case 2:
                    gui.c.textContent = 4;
                    gui.c.style.color = "pink";
                    break;
                case 3:
                    gui.d.textContent = 4;
                    gui.d.style.color = "pink";
                    break;
            }
        }
    }
}

//-- Botón 5
gui.cinco.onclick = () => {
    crono.start()
    console.log("Click en 5");
    for (let i = 0; i < 4; i++) {
        if (clave[i] === "5") {
            switch (i) {
                case 0:
                    gui.a.textContent = 5;
                    gui.a.style.color = "pink";
                    break;
                case 1:
                    gui.b.textContent = 5;
                    gui.b.style.color = "pink";
                    break;
                case 2:
                    gui.c.textContent = 5;
                    gui.c.style.color = "pink";
                    break;
                case 3:
                    gui.d.textContent = 5;
                    gui.d.style.color = "pink";
                    break;
            }
        }
    }
}

//-- Botón 6
gui.seis.onclick = () => {
    crono.start()
    console.log("Click en 6");
    for (let i = 0; i < 4; i++) {
        if (clave[i] === "6") {
            switch (i) {
                case 0:
                    gui.a.textContent = 6;
                    gui.a.style.color = "pink";
                    break;
                case 1:
                    gui.b.textContent = 6;
                    gui.b.style.color = "pink";
                    break;
                case 2:
                    gui.c.textContent = 6;
                    gui.c.style.color = "pink";
                    break;
                case 3:
                    gui.d.textContent = 6;
                    gui.d.style.color = "pink";
                    break;
            }
        }
    }
}

//-- Botón 7
gui.siete.onclick = () => {
    crono.start()
    console.log("Click en 7");
    for (let i = 0; i < 4; i++) {
        if (clave[i] === "7") {
            switch (i) {
                case 0:
                    gui.a.textContent = 7;
                    gui.a.style.color = "pink";
                    break;
                case 1:
                    gui.b.textContent = 7;
                    gui.b.style.color = "pink";
                    break;
                case 2:
                    gui.c.textContent = 7;
                    gui.c.style.color = "pink";
                    break;
                case 3:
                    gui.d.textContent = 7;
                    gui.d.style.color = "pink";
                    break;
            }
        }
    }
}

//-- Botón 8
gui.ocho.onclick = () => {
    crono.start()
    console.log("Click en 8");
    for (let i = 0; i < 4; i++) {
        if (clave[i] === "8") {
            switch (i) {
                case 0:
                    gui.a.textContent = 8;
                    gui.a.style.color = "pink";
                    break;
                case 1:
                    gui.b.textContent = 8;
                    gui.b.style.color = "pink";
                    break;
                case 2:
                    gui.c.textContent = 8;
                    gui.c.style.color = "pink";
                    break;
                case 3:
                    gui.d.textContent = 8;
                    gui.d.style.color = "pink";
                    break;
            }
        }
    }
}

//-- Botón 9
gui.nueve.onclick = () => {
    crono.start()
    console.log("Click en 9");
    for (let i = 0; i < 4; i++) {
        if (clave[i] === "9") {
            switch (i) {
                case 0:
                    gui.a.textContent = 9;
                    gui.a.style.color = "pink";
                    break;
                case 1:
                    gui.b.textContent = 9;
                    gui.b.style.color = "pink";
                    break;
                case 2:
                    gui.c.textContent = 9;
                    gui.c.style.color = "pink";
                    break;
                case 3:
                    gui.d.textContent = 9;
                    gui.d.style.color = "pink";
                    break;
            }
        }
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