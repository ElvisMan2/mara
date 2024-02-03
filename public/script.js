    



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
        window.location.href = './actualizarNumero.html';
      }
      else{
        if(usuario==contrasena){
         
          
          
          window.location.href = './reclamoAlumno.html';
          

          






        }
        else{
          alert('contraseña incorrecta');
          
        }
        
      }
      
    }
    
  }


  function guardarAsistencia() {
    
    const tableRows = document.querySelectorAll('#calificacionesTable tbody tr');
    const nuevasAsistencias = [];

    tableRows.forEach(row => {
      const cells = row.getElementsByTagName('td');
      const cellsAsistencia = row.getElementsByTagName('select');
      
      
      const asistencia = {
        codigo: cells[0].innerText,

        a1: cellsAsistencia[0].value,
        a2: cellsAsistencia[1].value,
        a3: cellsAsistencia[2].value,
        a4: cellsAsistencia[3].value,
        a5: cellsAsistencia[4].value,
        a6: cellsAsistencia[5].value,
        a7: cellsAsistencia[6].value,
        a8: cellsAsistencia[7].value,

        };


      nuevasAsistencias.push(asistencia);
    });

    // Realiza la solicitud al servidor para actualizar las asistencia
    fetch('http://localhost:3000/asistencia', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nuevasAsistencias),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.message);
      alert("Asistencia Registrada")
    })
    .catch(error => console.error('Error al guardar la asistencia:', error));
  }



    function guardarNumero() {
    
    const tableRows = document.querySelectorAll('#calificacionesTable tbody tr');
    const nuevasCalificaciones = [];

    tableRows.forEach(row => {
      const cells = row.getElementsByTagName('td');
      const cellsNotas = row.getElementsByTagName('input');
      
      
      const calificacion = {
        codigo: cells[0].innerText,
        parcial: cells[4].innerText,
        final: cells[5].innerText,
        continua: cells[6].innerText,
        promedio: cells[7].innerText,

        celular: cellsNotas[0].value,
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
      alert("Numeros guardados")
    })
    .catch(error => console.error('Error al guardar calificaciones:', error));
  }





  
  function guardarRespuestas() {
  
    const tableRows = document.querySelectorAll('#calificacionesTable tbody tr');
    const nuevasRes = [];

    tableRows.forEach(row => {
      const cells = row.getElementsByTagName('td');
      const cellsRespuesta = row.getElementsByTagName('textarea');
      
      let estadoAsignado;

      if (cellsRespuesta[0].value.trim() == "") {
          estadoAsignado = "enviado";
      } else {
          estadoAsignado = "atendido";
      }

      if(cells[3].innerText=='-'){
        estadoAsignado = "-";
      }


      const res = {
        codigo: cells[0].innerText,
        reclamo: cells[3].innerText,
        estado: estadoAsignado,
        respuesta: cellsRespuesta[0].value,

      };


      nuevasRes.push(res);
    });

    // Realiza la solicitud al servidor para actualizar los reclamos
    fetch('http://localhost:3000/reclamos', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nuevasRes),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.message);
      alert("Guardado")
      location.reload();
    })
    .catch(error => console.error('Error al guardar calificaciones:', error));

    
  }


  function guardarRespuestasAlumno() {
  
    const tableRows = document.querySelectorAll('#calificacionesTable tbody tr');
    const nuevasRes = [];

    tableRows.forEach(row => {
      const cells = row.getElementsByTagName('td');
      const cellsRespuesta = row.getElementsByTagName('textarea');


      const res = {
        codigo: cells[0].innerText,
        reclamo: cellsRespuesta[0].value,
        estado: 'enviado',
        respuesta: cells[4].innerText,

      };


      nuevasRes.push(res);
    });

    // Realiza la solicitud al servidor para actualizar los reclamos
    fetch('http://localhost:3000/reclamos', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nuevasRes),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.message);
      alert("Guardado")

    })
    .catch(error => console.error('Error al guardar calificaciones:', error));

    
  }