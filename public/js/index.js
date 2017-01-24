// client-side JS

var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createMessage', {
    to: 'Justin',
    text: 'Hey, this is another test message!',
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (data) {
  console.log('New message:', JSON.stringify(data, null, 2));
});