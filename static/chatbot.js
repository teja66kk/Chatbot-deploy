function toggleChat() {
    const chatContainer = document.getElementById('chatbot-container');
    if (chatContainer.style.display === 'none' || chatContainer.style.display === '') {
        chatContainer.style.display = 'block';
    } else {
        chatContainer.style.display = 'none';
    }
}

function sendMessage() {
    const input = document.getElementById('chatbot-input');
    const message = input.value;

    if (message.trim() === '') {
        return;
    }

    addMessage('You: ' + message);
    input.value = '';

    fetch('/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: message }),
    })
    .then(response => response.json())
    .then(data => {
        addMessage('Bot: ' + data.message);
    });
}

function addMessage(message) {
    const messageContainer = document.getElementById('chatbot-messages');
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageContainer.appendChild(messageElement);
    messageContainer.scrollTop = messageContainer.scrollHeight;
}
