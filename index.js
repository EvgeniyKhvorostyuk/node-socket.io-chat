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
})
