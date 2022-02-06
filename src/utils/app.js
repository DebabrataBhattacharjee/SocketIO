import tone from '../static/Cricket.mp3';
const { io } = require('socket.io-client');
const socket = io('http://localhost:3003/');
const audio = new Audio(tone);

console.log("sockets", socket.id);
// EVENTS FROM CLIENT-SIDE
export const loginNewUser = (userName) => {
    console.log('User', userName)
    socket.emit('new-user-connected', userName);
}

export const append = (message, id, className) => {
    const messageViewContainer = document.querySelector('.msg-view');
    const incomingMessage = document.createElement('div');
    incomingMessage.innerText = message;
    incomingMessage.classList.add(className);
    messageViewContainer.append(incomingMessage);
    if (className === 'msg-left' || className === 'msg-central')
        audio.play();
}

export const sendMessage = (textMessage) => {
    append(`You: ${textMessage}`, null, 'msg-right');
    socket.emit('send', { textMessage, senderId: socket.id });
}


// EVENTS FROM SERVER-SIDE

socket.on('new-message', (data) => {
    console.log('socket id', data.senderId, socket.id);
    append(`${data.message}:${data.name}`, socket.id, 'msg-left');
});

socket.on('user-joined', (name) => {
    append(`${name} joined the chat`, null, 'msg-central');
});

socket.on('user-disconnect', (name) => {
    append(`${name} left`, null, 'msg-central');
});



