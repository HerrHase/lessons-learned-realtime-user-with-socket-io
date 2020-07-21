const server = require('http').createServer()
const io = require('socket.io')(server)

/**
 *  on client connection
 *
 */
io.on('connection', (socket) => {

    // send count to all clients
    io.sockets.emit('count', getCurrentState(socket))

    // send count to all clients if user disconnect
    socket.on('disconnect', () => {
        io.sockets.emit('count', getCurrentState(socket))
    })

})

/**
 *  get current state, count of clients and time
 *
 *  @return object
 */
function getCurrentState(socket)
{
    const now = new Date().toUTCString()

    return {
        'count': socket.client.conn.server.clientsCount,
        'now' : now
    }
}

server.listen(3000)