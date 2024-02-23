registrar=(tipoExamen)=>{
    texto=vozTexto(tipoExamen);
}

vozTexto=(tipoExamen)=>{
    
    const recognition= new webkitSpeechRecognition();
    recognition.continous=true;
    recognition.lang='es-ES';
    recognition.interimResult=true;

    recognition.start();

    recognition.onresult = (event) => {
        const texto = event.results [event.results.length - 1][0].transcript;
        //alert(texto);

        digitarCalificaciones(texto, tipoExamen);

    }

}

function digitarCalificaciones(texto, tipoExamen){
    arregloCalificaciones=cadenaArreglo(texto);
    let calificaciones=document.getElementsByClassName(tipoExamen);

    let n=0;
    if(arregloCalificaciones.length>calificaciones.length){
        n=calificaciones.length;
    }
    else{
        n=arregloCalificaciones.length;
    }

    for(i=0;i<n;i++){
        calificaciones[i].value=arregloCalificaciones[i];
    }

}



function cadenaArreglo(cadena) {
    // Dividir la cadena en un arreglo de substrings utilizando el espacio como separador
    var numerosComoTexto = cadena.split(" ");

    // Convertir cada substring en un número entero y almacenarlo en un nuevo arreglo
    var arregloDeEnteros = numerosComoTexto.map(function(numero) {
        var numeroEntero = parseInt(numero, 10);
        // Verificar si el número está dentro del intervalo o es un NaN
        if (isNaN(numeroEntero) || numeroEntero < 0 || numeroEntero > 20) {
            leerTexto('valores fuera de rango')
            return null; // Almacenar null si no cumple con las condiciones

        } else {
            return numeroEntero; // Almacenar el número entero si cumple con las condiciones
        }
    });

    return arregloDeEnteros;
}

function leerTexto (text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    speech.lang = 'es-ES'
    window.speechSynthesis.speak(speech);
}