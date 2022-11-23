document.getElementById("rutaroja").onclick = function() {myFunction()};


rutaRoja = document.getElementById("roja");
cardsContainer = document.getElementById("cards-container");

let rojo = '#d7263dff';


function myFunction() {

    
    if (rutaRoja.style.display = 'none'){
        
        rutaRoja.style.display = 'flex';
        cardsContainer.style.display = 'none';

        rutaRoja.style.transition = "all 1s"

        setTimeout(() => {
            rutaRoja.style.backgroundColor = rojo;
          })


        console.log('ruta ' + rutaRoja.style.display);
        console.log('Cards ' + cardsContainer.style.display);
    }

}