

document.getElementById("rutaroja").onclick = function() {myFunction()};

tourTodo = document.getElementById("tour-todo")
rutaRoja = document.getElementById("roja");
cardsContainer = document.getElementById("cards-container");

let rojo = '#d7263dff';


function myFunction() {

    
    if (rutaRoja.style.display = 'none'){
        
        rutaRoja.style.display = 'flex';
        cardsContainer.style.display = 'none';

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