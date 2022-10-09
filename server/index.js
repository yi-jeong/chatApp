const PORT = process.env.PORT || 4000

const http = require('http');
const server = http.createServer();

const socketio = require("socket.io")(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
});

socketio.on("connection", (socket) => {
    console.log("connection");

    socket.on("send chat", (item) => {
        console.log(item.name + " : " + item.message);
        socketio.emit("receive chat", { name: item.name, message: item.message });
    });
});

server.listen(PORT,()=>console.log(`server ${PORT} start ! !`))
