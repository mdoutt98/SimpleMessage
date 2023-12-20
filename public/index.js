document.addEventListener("DOMContentLoaded", () => {
    loadMessages();
    const messageForm = document.getElementById("message-form");

    messageForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const messageText = document.getElementById("message").value;
        if (messageText.trim() !== "") {
            postMessage({ message: messageText });
        }
    });
});

function addMessageToContainer(message) {
    const messageList = document.getElementById("message-list");
    const messageItem = document.createElement("div");
    messageItem.className = "message";
    messageItem.textContent = message;
    messageList.appendChild(messageItem);
}

function postMessage(messageData) {
    fetch('/add-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(messageData),
    })
        .then(response => response.text())
        .then(data => {
            addMessageToContainer(messageData.message);
            document.getElementById("message").value = "";
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function loadMessages() {
    fetch('/get-messages')
        .then(response => response.json())
        .then(messages => {
            messages.forEach(message => {
                addMessageToContainer(message);
            });
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}
