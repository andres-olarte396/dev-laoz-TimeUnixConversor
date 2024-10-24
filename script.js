function convertUnixToDate() {
    const unixTime = document.getElementById('unixTime').value;
    const dateResult = document.getElementById('dateResult');

    if (unixTime) {
        const date = new Date(unixTime * 1000);
        dateResult.innerText = `Fecha: ${date.toLocaleString()}`;
        dateResult.classList.remove('error');
    } else {
        dateResult.innerText = 'Por favor, introduce un timestamp válido.';
        dateResult.classList.add('error');
    }
}

function convertDateToUnix() {
    const dateInput = document.getElementById('dateInput').value;
    const unixResult = document.getElementById('unixResult');

    if (dateInput) {
        const date = new Date(dateInput);
        const unixTimestamp = Math.floor(date.getTime() / 1000);
        if (!isNaN(unixTimestamp)) {
            unixResult.innerText = `Timestamp Unix: ${unixTimestamp}`;
            unixResult.classList.remove('error');
        } else {
            unixResult.innerText = 'Por favor, introduce una fecha válida.';
            unixResult.classList.add('error');
        }
    } else {
        unixResult.innerText = 'Por favor, introduce una fecha válida.';
        unixResult.classList.add('error');
    }
}