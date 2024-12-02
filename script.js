function sendMessage() {
    const chatBox = document.getElementById('chat-box');
    const chatInput = document.getElementById('chat-input');
    const message = chatInput.value;

    if (message.trim()) {
        const newMessage = document.createElement('p');
        newMessage.textContent = message;
        chatBox.appendChild(newMessage);
        chatInput.value = '';
    }
}
