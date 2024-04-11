//-- Elementos del DOM y obtención del contexto del canvas 2d
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


//-- Acceder al botón de disparo
const btnLanzar = document.getElementById("btnLanzar");

//-- Acceder al botón de inicio
const btnIniciar = document.getElementById("btnIniciar");

//-- Sonidos
//-- Crear los elementos de sonido
const rebote_sound = new Audio('rebote.mp3');

//-- Acceder al deslizador de ángulo
const angulo = document.getElementById("angle");
const angulo_disp = document.getElementById("angle_disp");

//-- Acceder al deslizador de velocidad
const velocidad = document.getElementById("veloc");
const velocidad_disp = document.getElementById("veloc_disp");



//-- Coordenadas iniciales del proyectil
let xop = 5;
let yop = 345;
let xp = xop;
let yp = yop;

//-- Coordenadas iniciales del objetivo
let xomin = 200;
let xomax = 770;
let xo = 500; //getRandomXO(xomin,xomax);
let yo = 370;



//-- Dibujar el objetivo
dibujarO(xo,yo); // Pintar el objetivo

//-- Dibujar el proyectil
dibujarP(xop, yop, 50, 50, "green"); //-- Pintar el proyectil



//-- Velocidad del proyectil
let velpx = 5;
let velpy = 1;



//-- Función principal de actualización
function lanzar()
{
  //-- Implementación del algoritmo de animación:

  //-- 1) Actualizar posición de los elementos
  
  //-- Condición de rebote en extremos verticales del canvas
  if (xp < 0 || xp >= (canvas.width - 50) ) {
  bound_sound();
  velpx = -velpx;
}

  //-- Condición de rebote en extremos horizontales del canvas
  if (yp <= 0 || yp > (canvas.height - 50)) {
      bound_sound();
      velpy = -velpy;
}

  //-- Actualizar la posición
  xp = xp + velpx;
  yp = yp + velpy;

  //-- Colisión¿¿¿¿????
  if (xp - xo < 10 ) {
    dibujarP(xp, yp, 50, 50, "yellow"); // Pintar el proyectil
} 

  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Pintar los elementos en el canvas (con los métodos beginPath() y closePath())
  dibujarO(xo, yo); //-- Pintar el objetivo
  dibujarP(xp, yp, 50, 50, "blue"); //-- Pintar el proyectil
  
  //-- 4) Repetir
  requestAnimationFrame(lanzar);
}



function bound_sound() {

  rebote_sound.currentTime = 0;
  rebote_sound.play();
}



//-- Función para pintar el proyectil
function dibujarP(x, y, lx, ly, color) {
  
  //-- Pintar el proyectil (dibujar los elementos visibles)
  ctx.beginPath();

    //-- Definir un rectángulo de dimensiones lx y ly
    ctx.rect(x, y, lx, ly);

    //-- Color de relleno del rectángulo
    ctx.fillStyle = color;

    //-- Mostrar el relleno
    ctx.fill();

    //-- Mostrar el trazo del rectángulo
    ctx.stroke();

  ctx.closePath();
}



//-- Función para pintar el objetivo
function dibujarO(x,y) {

  //-- Pintando el objetivo
  ctx.beginPath();

    //-- Dibujar un circulo: coordenadas x,y del centro
    //-- Radio, Angulo inicial y angulo final
    ctx.arc(x, y, 25, 0, 2 * Math.PI);
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;
    ctx.fillStyle = 'red';

    //-- Dibujar el relleno
    ctx.fill()    

    //-- Dibujar el trazo
    ctx.stroke();

  ctx.closePath();
}


//-- Función de retrollamada del botón de disparo
btnLanzar.onclick = () => {
  lanzar();
}

//-- Función de retrollamada del botón iniciar
btnIniciar.onclick = () => {
  //-- Reinicio
  location.reload();

  //-- Dibujar el proyectil
  dibujarP(xop, yop, 50, 50, "green"); //-- Pintar el proyectil
}



// Función para generar un número aleatorio entre un rango para posicionar el objetivo aleatoriamente



//-- Mostrar valores de la aceleración
angulo.oninput = () => {
    angulo_disp.innerHTML = angulo.value;
}

//-- Mostrar valores de la velocidad
velocidad.oninput = () => {
    velocidad_disp.innerHTML = velocidad.value;
}











//----------------------- ESQUELETO DEL PROGRAMA DE ANIMACIÓN ----------------------

//-- Declaración de variables y objetos

//-- Obtención del canvas y de los elementos HTML a usar

//-- Función principal de actualización
function update()
{
  //-- Implementación del algoritmo de animación:

  //-- 1) Actualizar posición de los elementos

  //-- 2) Borrar el canvas

  //-- 3) Pintar los elementos en el canvas (con los métodos beginPath() y closePath())

  //-- 4) Repetir
  requestAnimationFrame(update);
}

//-- Otras funciones....

//-- Hay que llamar a update la primera vez
update();
