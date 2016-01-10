function send() {
    if (document.getElementById('sendbutton').clicked) {
        var message = document.getElementById('textinput').value;
        document.getElementById('textinput').value='';
        socket.emit('ny event', {data: message});
    };
};

var socket = io('http://localhost:5000');
socket.on('connect', function() {
    socket.emit('my event', {data: 'I\'m connected!'});
});

send();
