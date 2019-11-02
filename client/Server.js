var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

io.on("connection", function(socket) {
  console.log("User connected");

  socket.on("channel", function(from, msg) {
    const sentence = from + "'s suggestion: " + msg;
    io.emit("message", sentence);
    console.log("Message:", sentence);
  });

  socket.on("disconnect", function() {
    console.log("User disconnected");
  });
});

http.listen(3001, function() {
  console.log("Listening on *:3001");
});
