const scriptURLVerde = 'https://script.google.com/macros/s/AKfycbwVHSOuiD2NPlIzYXDJTiCJFXrNj8zN0beOj8RhbLH2dXiTQdIQq_mm7vRYecFhsZYL/exec'
const formVerde = document.forms['google-sheet-verde']

formVerde.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURLVerde, { method: 'POST', body: new FormData(formVerde) })
        .then(response => Swal.fire({
            title: 'Muchas gracias!',
            html: 'Por favor ve a nuestro local para hacer efectiva tu reserva. <br> <b>RUTA VERDE</b>',
            icon: 'success',
            confirmButtonText: 'Ahí vamos!'
        }))
        .catch(error => console.error('Error!', error.message))
})

const scriptURLRoja = 'https://script.google.com/macros/s/AKfycbw60IALCi1ykQnWZyAlW6P6Fm5vKNvsHR_PHeo2y0Blttu_B6MaSWoA7NENlwRppSNTiw/exec'
const formRoja = document.forms['google-sheet-roja']

formRoja.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURLRoja, { method: 'POST', body: new FormData(formRoja) })
        .then(response => Swal.fire({
            title: 'Muchas gracias!',
            html: 'Por favor ve a nuestro local para hacer efectiva tu reserva. <br> <b>RUTA ROJA</b>',
            icon: 'success',
            confirmButtonText: 'Ahí vamos!'
        }))
        .catch(error => console.error('Error!', error.message))
})