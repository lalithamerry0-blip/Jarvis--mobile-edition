const chat = document.getElementById('chat');
const input = document.getElementById('msg'); // Fixed: Changed ByTd to ById

document.getElementById('send').onclick = () => {
    const t = input.value.trim();
    if (!t) return;
    add('YOU: ' + t, 'user');
    input.value = '';
    add('J.A.R.V.I.S: Processing...', 'ai');
    setTimeout(() => {
        // Replaces the "Processing..." message with the final response
        chat.lastChild.innerText = 'J.A.R.V.I.S: Systems online. How may I assist you, Boss?';
    }, 1080);
};

function add(text, who) {
    const d = document.createElement('div');
    d.className = 'msg ' + who;
    d.innerText = text;
    chat.appendChild(d);
    chat.scrollTop = chat.scrollHeight; // Auto-scrolls to the bottom
}
