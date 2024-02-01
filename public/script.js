    



  function guardarCalificaciones() {
    
    const tableRows = document.querySelectorAll('#calificacionesTable tbody tr');
    const nuevasCalificaciones = [];

    tableRows.forEach(row => {
      const cells = row.getElementsByTagName('td');
      const cellsNotas = row.getElementsByTagName('input');
      
      
      const calificacion = {
        codigo: cells[0].innerText,
        celular: cellsNotas[0].value,
        parcial: cellsNotas[1].value,
        final: cellsNotas[2].value,
        continua: cellsNotas[3].value,
        promedio: cellsNotas[4].value,
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

  function iniciarSesion(){
    
    var usuario=document.getElementById('usuario').value;
    var contrasena=document.getElementById('contrasena').value;

    if(usuario=='docente' && contrasena=='docente123'){
      window.location.href = './menu.html';
    }
    else{
      if(usuario=='delegado' && contrasena=='delegado123'){
        window.location.href = './menu.html';
      }
      else{
        if(usuario=='alumno' && contrasena=='alumno123'){
          window.location.href = './menu.html';
        }
        else{
          alert('contraseña incorrecta');
          
        }
      }
      
    }
    
  }


  function guardarAsistencia() {
    
    const tableRows = document.querySelectorAll('#calificacionesTable tbody tr');
    const nuevasCalificaciones = [];

    tableRows.forEach(row => {
      const cells = row.getElementsByTagName('td');
      const cellsNotas = row.getElementsByTagName('input');
      
      
      const calificacion = {
        codigo: cells[0].innerText,
        celular: cellsNotas[0].value,
        parcial: cellsNotas[1].value,
        final: cellsNotas[2].value,
        continua: cellsNotas[3].value,
        promedio: cellsNotas[4].value,
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