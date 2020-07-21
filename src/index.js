const io = require('socket.io-client')
const socket = io()

socket.on('connect', () => {
    socket.on('count', (data) => {

        // adding count and time from server
        document.getElementById('count').innerHTML = data.count
        document.getElementById('now').innerHTML = 'last update on ' + data.now;
    })
})