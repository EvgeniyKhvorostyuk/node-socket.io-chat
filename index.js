let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

app.get('/', (requestAnimationFrame,res) => {
    res.sendFile(__dirname+'/index.html');
});

http.listen(3000, () => {
    console.log('Connected..');
});

io.on('connection', (socket) => {
    console.log('There is a connection');

    socket.on('disconnect', () => {
        console.log('Disconnected.');
    });

    socket.on('created', (data) => {
        socket.broadcast.emit('created', (data));
    });

    socket.on('chat-message', (data) => {
        socket.broadcast.emit('chat-message', (data));
    });

    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', (data));
    });
    socket.on('stopTyping', (data) => {
        socket.broadcast.emit('stopTyping', (data));
    });
})
