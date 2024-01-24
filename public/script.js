document.getElementById("clientForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario por defecto

    const formData = new FormData(this); // Obtener datos del formulario
    const data = {};
    formData.forEach((value, key) => { // Convertir FormData a objeto JSON
        data[key] = value;
    });

    fetch('http://localhost:3000/client', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        // Manejar la respuesta de la API
        console.log(data);
        alert("Cliente registrado exitosamente");
        showLastTenClients(); // Llamar a la función para mostrar los últimos 10 clientes
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Hubo un error al registrar el cliente");
    });
});

function showLastTenClients() {
    fetch('http://localhost:3000/clients') // Cambia la ruta según tu API
        .then(response => response.json())
        .then(data => {
            const lastTenClientsTable = document.getElementById('lastTenClients');
            const tbody = lastTenClientsTable.querySelector('tbody');
            tbody.innerHTML = ''; // Limpiar la tabla antes de agregar nuevos datos

            const lastTen = data.slice(-10); // Obtener los últimos 10 elementos del array
            lastTen.forEach(client => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${client.dni}</td>
                    <td>${client.nombres}</td>
                    <td>${client.apellidos}</td>
                    <!-- ... Agregar otras celdas para otros campos ... -->
                `;
                tbody.appendChild(row); // Agregar la fila a la tabla
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

showLastTenClients(); // Llamar a la función al cargar la página para mostrar los últimos 10 clientes inicialmente
