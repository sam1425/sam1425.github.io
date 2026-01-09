const button = document.getElementById('sendBtn');
const input = document.getElementById('musicInput');
const send_Statuts = document.getElementById('status');

button.addEventListener('click', async () => {
    const song = input.value;
    if (song) {
        try{
            const response = await fetch('http://127.0.0.1:5000/request-song', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ song: song })
        });

        const result = await response.json();

        send_Statuts.innerText = `¡Añadido! ${result.message}`;
        input.value = '';
        } catch (error){
            statusDisplay.innerText = "Error: El servidor no responde.";
            console.error("Fetch error:", error);
        }
    } else {
        send_Statuts.innerText = "Por favor, escribe algo primero.";
    }
});

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        button.click();
    }
});
