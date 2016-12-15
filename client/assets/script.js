var socket = new WebSocket('ws://127.0.0.1:8000/echo');
socket.onopen = function (event) {
    socket.send('Socket is open!');
};

function send() {
    var message = document.getElementById('textinput').value;
    document.getElementById('textinput').value='';
    socket.send(message);
};


