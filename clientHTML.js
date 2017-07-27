
let socket = io('http://localhost:8080')
socket.on('connectionMessage', (message) => {
    $('body').append('<h3>' + message + '</h3>')
    socket.emit('ident', 'Lionel')
})

socket.on('status', (status) => {
    console.log(status)
})

socket.on('yo', (yo) => {
    console.log(yo)
})


socket.on('returnBonjour', (returnBonjour) => {
    console.log('Le serveur vous dis : ' + returnBonjour)
})

$('#bonjour').click(function () {
    socket.emit('bonjour', 'bonjour')
})

$('#yo').click(function () {
    socket.emit('yo')
})
