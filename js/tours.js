document.getElementById("rutaroja").onclick = function () { rutaRojaFunction() };
document.getElementById("rutaverde").onclick = function () { rutaVerdeFunction() };
document.getElementById("volverruta-a").onclick = function () { rutaVolverAFunction() };
document.getElementById("volverruta-b").onclick = function () { rutaVolverBFunction() };

tourTodo = document.getElementById("tour-todo")
rutaRoja = document.getElementById("roja");
rutaVerde = document.getElementById("verde");
cardsContainer = document.getElementById("cards-container");

horarioPartidaRojo = document.getElementById('horario-partida-rojo');
horarioParadaUnoRojo = document.getElementById('horario-parada-uno-rojo');
horarioParadaDosRojo = document.getElementById('horario-parada-dos-rojo');
horarioParadaTresRojo = document.getElementById('horario-parada-tres-rojo');
horarioFinalRojo = document.getElementById('horario-final-rojo');
horarioPartidaVerde = document.getElementById('horario-partida-verde');
horarioParadaUnoVerde = document.getElementById('horario-parada-uno-verde');
horarioParadaDosVerde = document.getElementById('horario-parada-dos-verde');
horarioParadaTresVerde = document.getElementById('horario-parada-tres-verde');
horarioParadaCuatroVerde = document.getElementById('horario-parada-cuatro-verde');
horarioFinalVerde = document.getElementById('horario-final-verde');

function rutaRojaFunction() {


    if (rutaRoja.style.display = 'none') {

        rutaRoja.style.display = 'flex';
        cardsContainer.style.display = 'none';
        rutaVerde.style.display = 'none';

        rutaRoja.style.transition = "all 1s"
        tourTodo.style.transition.backgroundColor = "all 1s"

        setTimeout(() => {
            tourTodo.style.background = 'linear-gradient(-45deg, #a32233, #a32233, #d7263dff, #a32233';
        })
    }

}

function rutaVerdeFunction() {


    if (rutaVerde.style.display = 'none') {

        rutaVerde.style.display = 'flex';
        cardsContainer.style.display = 'none';
        rutaRoja.style.display = 'none';

        rutaVerde.style.transition = "all 1s"
        tourTodo.style.transition.backgroundColor = "all 1s"

        setTimeout(() => {
            tourTodo.style.background = 'linear-gradient(-45deg, #00AA00, #00ff00, #00AA00, #00AA00';
        })




        console.log('ruta ' + rutaVerde.style.display);
        console.log('Cards ' + cardsContainer.style.display);
    }

}

function rutaVolverAFunction() {

        rutaVerde.style.display = 'none';
        cardsContainer.style.display = 'flex';
        tourTodo.style.background = 'linear-gradient(-45deg, #00c4ff, #00c4ff, #48ceff, #00c4ff)';
        rutaRoja.style.display = 'none';

}

function rutaVolverBFunction() {

    rutaVerde.style.display = 'none';
    cardsContainer.style.display = 'flex';
    tourTodo.style.background = 'linear-gradient(-45deg, #00c4ff, #00c4ff, #48ceff, #00c4ff)';
    rutaRoja.style.display = 'none';

}

var rad = document.turnoForm.turno;
var prev = null;
var turnoUno = true;
for (var i = 0; i < rad.length; i++) {
    rad[i].addEventListener('change', function () {
        (prev) ? console.log(prev.value) : null;
        if (this !== prev) {
            prev = this;
        }
        console.log('valor ' +this.value)

        if (this.value == 'turnoUno') {
            horarioPartidaRojo.textContent = '9:30';
            horarioParadaUnoRojo.textContent = '10:00';
            horarioParadaDosRojo.textContent = '11:00';
            horarioParadaTresRojo.textContent = '11:30';
            horarioFinalRojo.textContent = '12:00'
            


            horarioPartidaVerde.textContent = '9:30';
            horarioParadaUnoVerde.textContent = '9:45';
            horarioParadaDosVerde.textContent = '10:15';
            horarioParadaTresVerde.textContent = '10:35';
            horarioParadaCuatroVerde.textContent = '11:30';
            horarioFinalVerde.textContent = '12:00'
        }
        else if (this.value == 'turnoDos') {
            horarioPartidaRojo.textContent = '12:30';
            horarioParadaUnoRojo.textContent = '13:00';
            horarioParadaDosRojo.textContent = '13:30';
            horarioParadaTresRojo.textContent = '13:55';
            horarioFinalRojo.textContent = '14:25'


            horarioPartidaVerde.textContent = '14:00';
            horarioParadaUnoVerde.textContent = '14:15';
            horarioParadaDosVerde.textContent = '14:45';
            horarioParadaTresVerde.textContent = '15:05';
            horarioParadaCuatroVerde.textContent = '15:35';
            horarioFinalVerde.textContent = '15:55'
        }

    });
}

var radVerde = document.turnoVerdeForm.turno;
var prevVerde = null;
for (var i = 0; i < radVerde.length; i++) {
    radVerde[i].addEventListener('change', function () {
        (prevVerde) ? console.log(prevVerde.value) : null;
        if (this !== prevVerde) {
            prevVerde = this;
        }
        console.log('valor ' +this.value)

        if (this.value == 'turnoUno') {
            horarioPartidaVerde.textContent = '9:30';
            horarioParadaUnoVerde.textContent = '9:45';
            horarioParadaDosVerde.textContent = '10:15';
            horarioParadaTresVerde.textContent = '10:35';
            horarioParadaCuatroVerde.textContent = '11:30';
            horarioFinalVerde.textContent = '12:00'
        }
        else if (this.value == 'turnoDos') {
            horarioPartidaVerde.textContent = '14:00';
            horarioParadaUnoVerde.textContent = '14:15';
            horarioParadaDosVerde.textContent = '14:45';
            horarioParadaTresVerde.textContent = '15:05';
            horarioParadaCuatroVerde.textContent = '15:35';
            horarioFinalVerde.textContent = '15:55'
        }

    });
}

