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
        alert(texto);

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
        return parseInt(numero, 10);
    });

    return arregloDeEnteros;
}
