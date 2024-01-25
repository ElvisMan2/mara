    document.addEventListener("DOMContentLoaded", () => {
      // Hacer la solicitud a la API
      fetch('http://localhost:3000/calificaciones') 
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
              <td><input type="text" class="parcial" value="${registro.parcial}"> </td>
              <td><input type="text" class="final" value="${registro.final}"> </td>
              <td><input type="text" class="continua" value="${registro.continua}"> </td>
              <td><input type="text" class="promedio" value="${registro.promedio}"> </td>
              
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
      const cellsNotas = row.getElementsByTagName('input');
      
      
      const calificacion = {
        codigo: cells[0].innerText,
        parcial: cellsNotas[0].value,
        final: cellsNotas[1].value,
        continua: cellsNotas[2].value,
        promedio: cellsNotas[3].value,
      };


      nuevasCalificaciones.push(calificacion);
    });

    // Realiza la solicitud al servidor para actualizar las calificaciones
    fetch('http://localhost:3000/calificaciones', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nuevasCalificaciones),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.message);
      alert("Calificaciones guardadas correctamente")
    })
    .catch(error => console.error('Error al guardar calificaciones:', error));
  }

  function calcularPromedio(){
    
    var tabla = document.getElementById('calificacionesTable');
    var filas = tabla.getElementsByTagName('tr');

    for (var i = 1; i < filas.length; i++){
      var fila = filas[i];

      //extrayendo las calificaciones:
      var inputParcial = fila.querySelector('.parcial');
      var parcial = parseFloat(inputParcial.value);

      var inputFinal = fila.querySelector('.final');
      var final = parseFloat(inputFinal.value);

      var inputContinua = fila.querySelector('.continua');
      var continua = parseFloat(inputContinua.value);

      var promedio=(0.3*parcial+0.3*final+0.4*continua)

      var inputPromedio = fila.querySelector('.promedio')
      inputPromedio.value=promedio.toFixed(0);

    }

    alert("Promedios calculados!")
  }
