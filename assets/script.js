function send(){
}

function connect() {
    var socket = new WebSocket("irc.freenode.net:6667");
    socket.onopen socket.send("NICK IRCTEST \r\n");
    socket.send("USER testjs irc.freenode.net bla :david\r\n");


