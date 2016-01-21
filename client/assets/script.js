function send() {
    var message = document.getElementById('textinput').value;
    document.getElementById('textinput').value='';
    socket.emit('my event', {data: message});
};

var socket = io('http://localhost:5000');
socket.on('connect', function() {
    socket.emit('my event', {data: 'I\'m connected!'});
});

send();
