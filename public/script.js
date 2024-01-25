    document.addEventListener("DOMContentLoaded", () => {
      // Hacer la solicitud a la API
      fetch('http://localhost:3000/calificaciones') // Cambia la URL según donde se encuentre tu API
        .then(response => response.json())
        .then(data => {
          // Procesar los datos y agregar filas a la tabla
          const tableBody = document.querySelector('#calificacionesTable tbody');
          data.forEach(registro => {
            const row = document.createElement('tr');
            if(registro.parcial==null){
                registro.parcial=0;
            }
            if(registro.final==null){
                registro.final=0;
            }
            if(registro.continua==null){
                registro.continua=0;
            }
            if(registro.promedio==null){
                registro.promedio=0;
            }
            row.innerHTML = `
              <td>${registro.codigo}</td>
              <td>${registro.nombres}</td>
              <td>${registro.apellidos}</td>
              <td>${registro.celular}</td>
              <td><input type="text" value="${registro.parcial}"> </td>
              <td><input type="text" value="${registro.final}"> </td>
              <td><input type="text" value="${registro.continua}"> </td>
              <td><input type="text" value="${registro.promedio}"> </td>
              
            `;
            tableBody.appendChild(row);
          });
        })
        .catch(error => console.error('Error al obtener datos:', error));
    });



  function guardarCalificaciones() {
    const tableRows = document.querySelectorAll('#calificacionesTable tbody tr');
    const nuevasCalificaciones = [];

    tableRows.forEach(row => {
      const cells = row.getElementsByTagName('td');
      const calificacion = {
        codigo: cells[0].innerText,
        parcial: cells[4].innerText,
        final: cells[5].innerText,
        continua: cells[6].innerText,
        promedio: cells[7].innerText,
        tipo: cells[8].innerText
      };
      nuevasCalificaciones.push(calificacion);
    });

    // Realiza la solicitud al servidor para actualizar las calificaciones
    fetch('/api/calificaciones', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nuevasCalificaciones),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.message);
    })
    .catch(error => console.error('Error al guardar calificaciones:', error));
  }
