

document.getElementById("rutaroja").onclick = function() {rutaRojaFunction()};
document.getElementById("rutaverde").onclick = function() {rutaVerdeFunction()};


tourTodo = document.getElementById("tour-todo")
rutaRoja = document.getElementById("roja");
rutaVerde = document.getElementById("verde");
cardsContainer = document.getElementById("cards-container");

horarioPartidaRojo = document.getElementById('horario-partida-rojo');
horarioPartidaVerde = document.getElementById('horario-partida-verde');


let rojo = '#d7263dff';


function rutaRojaFunction() {

    
    if (rutaRoja.style.display = 'none'){
        
        rutaRoja.style.display = 'flex';
        cardsContainer.style.display = 'none';
        rutaVerde.style.display = 'none';

        rutaRoja.style.transition = "all 1s"
        tourTodo.style.transition.backgroundColor = "all 1s"

        setTimeout(() => {
            // rutaRoja.style.backgroundColor = rojo;
            tourTodo.style.background = 'linear-gradient(-45deg, #a32233, #a32233, #d7263dff, #a32233';
          })

          


        console.log('ruta ' + rutaRoja.style.display);
        console.log('Cards ' + cardsContainer.style.display);
    }

}

function rutaVerdeFunction() {

    
    if (rutaVerde.style.display = 'none'){
        
        rutaVerde.style.display = 'flex';
        cardsContainer.style.display = 'none';
        rutaRoja.style.display = 'none';

        rutaVerde.style.transition = "all 1s"
        tourTodo.style.transition.backgroundColor = "all 1s"

        setTimeout(() => {
            // rutaRoja.style.backgroundColor = rojo;
            tourTodo.style.background = 'linear-gradient(-45deg, #00AA00, #00ff00, #00AA00, #00AA00';
          })

          


        console.log('ruta ' + rutaVerde.style.display);
        console.log('Cards ' + cardsContainer.style.display);
    }

}

var primersalida = Boolean (true);
primersalida = true;

if (primersalida == true){
    horarioPartidaRojo.textContent = '9:30';
    horarioPartidaVerde.textContent = '9:30';
}
else{
    horarioPartidaRojo.textContent = '12:30';
    horarioPartidaVerde.textContent = '12:30';
}