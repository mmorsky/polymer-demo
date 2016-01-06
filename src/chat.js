
function chatButtonClicked(message) {
    var bubble = document.createElement("chat-bubble");
    bubble.innerHTML = message;
    $("#chat-window").append(bubble);
}
