//Archivo de JS.
//Resumen: No debe ser la manera mas inteligente de lograrlo. Sin embargo este archivo cambia el texto de los elementos que le especificamos, por el texto del otro lado del igual.
//Con un if, en caso de tener el idioma en es o es-ES se cambia el lenguaje a español. Sino se deja en ingles.
//Es una funcionalidad interesante de JS para una pagina que no tiene interaccion con el usuario.

if((navigator.language == 'es')||(navigator.language == 'es-ES')){
    //Informacion Personal
    document.getElementById("1").innerHTML = "Ingenieria Electronica";
    document.getElementById("2").innerHTML = "Ubicacion: San Carlos de Bariloche, Rio Negro, Argentina.";
    document.getElementById("3").innerHTML = "Linkedin: www.linkedin.com/in/miguel-sackmann-sala"
    document.getElementById("4").innerHTML = "E-mail: miguel.sackmann@gmail.com.";
    document.getElementById("5").innerHTML = "Telefono: 2944329086."

    //Resumen
    document.getElementById("6").innerHTML = "Resumen";
    document.getElementById("7").innerHTML = "Ingeniero de Automatizacion y Control en proyectos nucleares. Graduado de la carrera de Ingenieria Electronica de la Universidad Nacional de Rio Negro con Proyecto Final Integrador: 'Simulador de Nucleo para Ensayos a Lazo Cerrado de Sistemas de Control de Reactividad'";

    //Experiencia
    //Electronic Engineer - Control and Monitoring Systems - INVAP S.E.
    document.getElementById("8").innerHTML = "Experiencia";
    document.getElementById("9").innerHTML = "Ingeniero Electronico - Sistemas de Control y Monitoreo - INVAP S.E.";
    document.getElementById("10").innerHTML = "Proyectos_ Reactor Multiproposito Argentino (RA-10) y Reactor Multiproposito Brasileño (RMB)"
    document.getElementById("11").innerHTML = "Programacion de PLC y SCADA- STEP7-WINCC/ TiaPortal.";
    document.getElementById("12").innerHTML = "Ensayos de Aceptacion."
    document.getElementById("13").innerHTML = "Diseño de Susbistemas de Control y Monitoreo del Reactor.";
    document.getElementById("14").innerHTML = "Diseño de Paneles de Control.";
    document.getElementById("15").innerHTML = "Lectura y Comprension de P&ID"
    document.getElementById("16").innerHTML = "Trabajo en Equipos Multidisiplinarios.";
    document.getElementById("17").innerHTML = "Dibujo 2D y 3D en AutoCAD y Bentley."
    document.getElementById("18").innerHTML = "Otros."

    //Designer - Control and Monitoring Systems - INVAP S.E.
    document.getElementById("19").innerHTML = "Diseñador - Sistemas de Control y Monitoreo - INVAP S.E."
    document.getElementById("20").innerHTML = "Proyectos_ Reactor Multiproposito Argentino (RA-10) y Reactor Multiproposito Brasileño (RMB)."
    document.getElementById("21").innerHTML = "Programacion de PLC y SCADA- STEP7-WINCC/ TiaPortal."
    document.getElementById("22").innerHTML = "Ensayos de Aceptacion."
    document.getElementById("23").innerHTML = "Diseño de Susbistemas de Control y Monitoreo del Reactor."
    document.getElementById("24").innerHTML = "Diseño de Paneles de Control."
    document.getElementById("25").innerHTML = "Lectura y Comprension de P&ID."
    document.getElementById("26").innerHTML = "Trabajo en Equipos Multidisiplinarios."
    document.getElementById("27").innerHTML = "Dibujo 2D y 3D en AutoCAD y Bentley."
    document.getElementById("28").innerHTML = "Otros."

    //Internship - Control and Monitoring Systems - INVAP S.E.
    document.getElementById("29").innerHTML = "Pasantia Rentada - Sistemas de Control y Monitoreo - INVAP S.E."
    document.getElementById("30").innerHTML = "Proyectos_ Reactor Multiproposito Argentino (RA-10) y Reactor Multiproposito Brasileño (RMB)."
    document.getElementById("31").innerHTML = "1 año y 7 meses: Ago 2017 - Feb 2019."
    document.getElementById("32").innerHTML = "Programacion de PLC y SCADA- STEP7-WINCC/ TiaPortal."
    document.getElementById("33").innerHTML = "Ensayos de Aceptacion."
    document.getElementById("34").innerHTML = "Diseño de Susbistemas de Control y Monitoreo del Reactor."
    document.getElementById("35").innerHTML = "Diseño de Paneles de Control."
    document.getElementById("36").innerHTML = "Lectura y Comprension de P&ID."
    document.getElementById("37").innerHTML = "Trabajo en Equipos Multidisiplinarios."
    document.getElementById("38").innerHTML = "Dibujo 2D y 3D en AutoCAD y Bentley."
    document.getElementById("39").innerHTML = "Otros."
    
    //Student Assistant - Reasoning and Solving of Mathematical Problems Course
    document.getElementById("40").innerHTML = "Ayudante Alumno - Curso de Rasonamiento y Resolucion de Problemas Matematicos."
    document.getElementById("41").innerHTML = "Periodo de 10 meses: Feb 2017 a Jun 2017 y Feb 2018 a Jun 2018"
    document.getElementById("42").innerHTML = "Acompañamiento teorico practico a los alumnos."

    //Educacion
    document.getElementById("43").innerHTML = "Educacion."
    document.getElementById("44").innerHTML = "Universidad Nacional de Rio Negro."
    document.getElementById("45").innerHTML = "Grado en Ingenieria Electronica."
    document.getElementById("46").innerHTML = "United Learning Argentina."
    document.getElementById("47").innerHTML = "Lenguaje y Literatura Inglesa - Nivel B1+."
    document.getElementById("48").innerHTML = "CEM 123."
    document.getElementById("49").innerHTML = "Escuela Secundaria Cintifica Tecnologica."

    //Cursos
    document.getElementById("50").innerHTML = "Cursos."
    document.getElementById("51").innerHTML = "Cinetica Puntul - Fisica de Reactores Nucleares."
    document.getElementById("52").innerHTML = "Modelado de Reactores a traves de cinetica puntual."
    document.getElementById("53").innerHTML = "Estandares Generales IEC 62138 Nuclear Power Plants y IEC 60709 Separation."
    document.getElementById("54").innerHTML = "Norma IEC."
    document.getElementById("55").innerHTML = "Introducción a la Ingeniería de Reactores Nucleares - INVAP S.E."
    document.getElementById("56").innerHTML = "Fisica de un Reactor Nuclear."

    //Lenguajes
    document.getElementById("57").innerHTML = "Lenguajes."
    document.getElementById("58").innerHTML = "Ingles."
    document.getElementById("59").innerHTML = "Conversacional. Certificado de nivel B1+"
    document.getElementById("60").innerHTML = "Español."
    document.getElementById("61").innerHTML = "Lenguaje nativo."

    console.log("El idioma del buscador es español");
}

else{
    console.log("El idioma del buscador no es español, por lo que se visualizará la pagina en ingles");
}
