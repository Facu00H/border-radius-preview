let caja = document.querySelector('.caja');
let bordeUno = document.querySelector('#topizquierda');
let bordeDos = document.querySelector('#topderecha');
let bordeTres = document.querySelector('#bottomberecha');
let bordeCuatro = document.querySelector('#bottomizquierda');
let boton = document.querySelector('#btn')
let spanOne = document.querySelector('.one');
let spanTwo = document.querySelector('.two');
let spanThree = document.querySelector('.three');
let spanFour = document.querySelector('.four');

console.log(bordeUno)

bordeUno.addEventListener("keyup", function (event) {
    // Checking if key pressed is ENTER or not
    // if the key pressed is ENTER
    // click listener on button is called
    if (event.keyCode == 13) {
        boton.click();
    }
});

bordeDos.addEventListener("keyup", function (event) {
    // Checking if key pressed is ENTER or not
    // if the key pressed is ENTER
    // click listener on button is called
    if (event.keyCode == 13) {
        boton.click();
    }
});

bordeTres.addEventListener("keyup", function (event) {
    // Checking if key pressed is ENTER or not
    // if the key pressed is ENTER
    // click listener on button is called
    if (event.keyCode == 13) {
        boton.click();
    }
});

bordeCuatro.addEventListener("keyup", function (event) {
    // Checking if key pressed is ENTER or not
    // if the key pressed is ENTER
    // click listener on button is called
    if (event.keyCode == 13) {
        boton.click();
    }
});

boton.onclick = function valores(str){
    str.preventDefault();
    topIzquierda = bordeUno.value;
    topDerecha = bordeDos.value;
    botDerecha = bordeTres.value;
    botIzquierda = bordeCuatro.value;

    console.log(botDerecha);
    
    caja.style.borderTopLeftRadius = topIzquierda;
    caja.style.borderTopRightRadius = topDerecha;
    caja.style.borderBottomRightRadius = botDerecha;
    caja.style.borderBottomLeftRadius = botIzquierda;

    spanOne.textContent = topIzquierda;
    spanTwo.textContent = topDerecha;
    spanThree.textContent = botDerecha;
    spanFour.textContent = botIzquierda;
}
