function iniciarPreguntas(){

    document.getElementById("btnReiniciar").style.display="none"; // oculta el boton de reiniciar
    
    alert("Responde las siguientes preguntas:");  // Muestra un cuadro de alerta con un mensaje al usuario

    let nombre =prompt("¿Cuál es tu nombre?");   // Solicitamos el nombre del usuario y lo guardamos en la variable 'nombre'
    let edad =prompt("¿Cuántos años tienes?");   // Solicitamos la edad del usuario y la guardamos en la variable 'edad'
    let lenguaje =prompt("¿Qué lenguaje de programación estás estudiando?"); // Preguntamos por el lenguaje de programación que está aprendiendo el usuario

    // Verificamos si el usuario ingresó los valores en todas las preguntas
    if(nombre && edad && lenguaje){
        
        // Inserta el mensaje con los datos ingresados en el elemento con id "resultado"
        document.getElementById("resultado").innerHTML = `<p>Hola <strong>${nombre}</strong>, tienes <strong>${edad}</strong> años y 
        ya estás aprendiendo <strong>${lenguaje}</strong>!</p>`;

        // Preguntamos si le gusta el lenguaje que está aprendiendo y almacena la respuesta en la variable 'respuesta'
        let respuesta = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`);
        
        if (respuesta == "1") { // Si el usuario responde "1" (SÍ)
            let docUrl =obtenerUrlDocumentacion(lenguaje.toLowerCase()); // Obtiene la URL de la documentación según el lenguaje ingresado
            document.getElementById("resultado").innerHTML += ` 
                <p>¡Muy bien! Sigue estudiando y tendrás mucho éxito. 🚀</p>
                <p>Consulta documentación relevante aquí: <a href="${docUrl}" target="_blank" class="doc-link">${lenguaje} Docs</a></p>`;
        
            } else if(respuesta =="2") { // Si el usuario responde "2" (NO)
            document.getElementById("resultado").innerHTML += `<p>Oh, qué pena... 
            ¿Ya intentaste aprender otros lenguajes? 🤔</p>`;
       
        } else{ // Si la respuesta no es ni "1" ni "2"
            document.getElementById("resultado").innerHTML += 
            `<p>Respuesta no válida. Inténtalo nuevamente.</p>`;
        }

        document.getElementById("btnReiniciar").style.display="inline-block";// muestra el boton de reinicio

    
    } else { // Si el usuario no ingresó todos los datos requeridos
        document.getElementById("resultado").innerHTML = `<p>No ingresaste todas las respuestas. Vuelve a intentarlo.</p>`;
        document.getElementById("btnReiniciar").style.display="inline-block"; //muestra el boton
    }
}

// Esta función limpia el contenido del elemento con id "resultado", reiniciando la encuesta
function reiniciarEncuesta(){
    document.getElementById("resultado").innerHTML ="";
    document.getElementById("btnReiniciar").style.display="none";// oculta el boton de reinicio
    setTimeout(iniciarPreguntas, 100);// creamos un retraso antes de llamar a hacer las preguntas
}

// Esta función devuelve la URL de la documentación oficial del lenguaje ingresado por el usuario

function obtenerUrlDocumentacion(lenguaje){
    let docs ={ 
        "javascript":"https://developer.mozilla.org/es/docs/Web/JavaScript",   // Documentación de JavaScript
        "python":"https://docs.python.org/3/",   // Documentación de Python
        "java":"https://www.w3schools.com/java/java_ref_reference.asp", // Documentación de Java
        "c++":"https://cplusplus.com/doc/",   // Documentación de C++
        "php":"https://www.php.net/manual/es/",   // Documentación de PHP
        "c#":"https://learn.microsoft.com/es-es/dotnet/csharp/"   // Documentación de C#
    };

    // Retorna la URL de la documentación si el lenguaje existe en el objeto "docs", de lo contrario, hace una búsqueda en Google
    return docs[lenguaje] || "https://www.google.com/search?q=" + encodeURIComponent(lenguaje +" documentation");
}

//se consultó mucha documentación para lograr algunas funciones
