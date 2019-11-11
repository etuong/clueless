var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

io.on("connection", function(socket) {
  console.log("User connected");

  socket.on("channel-message", function(from, action, msg) {
    const sentence = from + "'s " + action + ": " + msg;
    console.log(sentence);
    io.emit("message", sentence);
  });

  socket.on("channel-start", function(from) {
    const response = "Game is started by " + from + "!";
    console.log(response);
    io.emit("start", response);
  });

  socket.on("disconnect", function() {
    console.log("User disconnected");
  });
});

http.listen(3001, function() {
  console.log("Listening on *:3001");
});
