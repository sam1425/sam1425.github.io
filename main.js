const button = document.getElementById('sendBtn');
const input = document.getElementById('musicInput');
const send_Statuts = document.getElementById('status');

button.addEventListener('click', async () => {
    const song = input.value;

    const PUBLIC_IP = "181.237.206.110";
    if (song) {
        try{
            const response = await fetch(`http://${PUBLIC_IP}:2323/request-song`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ song: song })
        });

        const result = await response.json();

        send_Statuts.innerText = `¡Añadido! ${result.message}`;
        input.value = '';
        } catch (error){
            send_Status.innerText = "Error: El servidor no responde.";
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
