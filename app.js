const typed = new Typed('.typed',{
    strings:[
        '<i class="my-texto">I am Braian Sotalin</i>',
        '<i class="my-texto">I am a software developer</i> ',
        '<i class="my-texto">I am from Ecuador <img class="bandera" src="./img/ecuador.png" ></i>',
        '<i class="my-texto">I like web development</i>',
        '<i class="my-texto">Also I like hamburguer <i class="fas fa-hamburger"></i></i>'
    ],
    stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 45, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 25, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});
function ver(n) {
    document.getElementById("subseccion"+n).style.display="block"
    }
function ocultar(n) {
    document.getElementById("subseccion"+n).style.display="none"
    }
    
const vistaClaro = document.querySelector('#op-uno');

vistaClaro.addEventListener('click', (event) => {
    event.preventDefault();
	document.body.classList.toggle('dark');//toggle agrega una clase si no tiene y la elimina si ya la tiene
	vistaClaro.classList.toggle('active');
});
const vistaOscuro= document.querySelector('#op-dos');

vistaOscuro.addEventListener('click', (event) => {
    event.preventDefault();
	document.body.classList.toggle('dark');//toggle agrega una clase si no tiene y la elimina si ya la tiene
	vistaOscuro.classList.toggle('active');
});

let seg=1;
console.log(seg);
function actualizar (){
    
        seg=seg+1;
        console.log(seg);
        par(seg);
        setTimeout(actualizar,5000);
    
}
function par(){
    if(seg%2==0){
        document.getElementById('imagen').src='./img/react.svg'
    } else if(seg%3==0){
        document.getElementById('imagen').src='./img/code.svg'
    }else {
        document.getElementById('imagen').src='./img/pic.svg'
    }
}

actualizar(seg);
// par(seg);
if(seg<0){
    seg=10;
}
console.log(seg);

