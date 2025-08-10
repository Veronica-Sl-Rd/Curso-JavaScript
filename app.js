
///Lista de síntomas
const sintomasBase = [
    "preocupación excesiva",
    "no poder relajarse / tensión constante",
    "rumiación / pensamiento obsesivo y repetitivo",
    "pérdida de interés o placer",
    "fatiga / problemas para dormir",
    "sensación de tristeza / culpa",
    "comportamiento compulsivo",
    "palpitaciones / taquicardia / temblores",
    "miedo a volverse loco / perder el control",
    "evitación (lugares o personas)",
    "cambios de humor intensos",
    "emociones intensas e inestables",
    "dificultad en laS relaciones",
    "impulsividad"
];

///Bienvenida
alert("Bienvenido a Mindy\n Averigüemos qué tan jodido estás...");

///Evaluación de síntomas
let sintomasEvaluados = [];

const evaluarSintomas = () => {
    sintomasEvaluados = [];

    for (let i = 0; i < sintomasBase.length; i++) {
        let nombre = sintomasBase[i];
        let valor = parseInt(prompt(`Del 0 al 10 ¿cuánto experimentas este síntoma:\n ${nombre.toUpperCase()}`));
    
    if (isNaN(valor) || valor < 0 || valor > 10) {
        alert("Valor inválido, contará como 0");
        valor = 0;
    }
    sintomasEvaluados.push({nombre, valor});
}
alert("Evaluación completada")
};

///Mostrar los resultados
const mostrarResultados = () => {
    if (sintomasEvaluados === 0) {
        alert("Tenés que realizar la evaluación");
        return;
    }
    let mensaje = "Estos son los resultados de los valores que asignaste:\n"
    for (let i = 0; i < sintomasEvaluados.length; i++) {
        let sint = sintomasEvaluados[i];
        mensaje += (`${sint.nombre.toUpperCase()}: ${sint.valor}\n`)
    }
    alert(mensaje);

    let estaSeguro = confirm ("¿Estás seguro que los valores asignados son correctos?");
    if (estaSeguro) {
        alert("Perfecto, continuemos.");
    } else {
        alert("Volvamos a intentarlo.")
        evaluarSintomas ();
    }
};

///Analizar Resultados
const analizarResultados = () => {
    if (sintomasEvaluados.length === 0) {
        alert("Tenés que realizar la evaluación");
        return;
    }
    const tieneSintoma = (nombre) => {
        for (let i = 0; i < sintomasEvaluados.length; i++) {
            if (sintomasEvaluados[i].nombre === nombre && sintomasEvaluados[i].valor >= 6) {
                return true;
            }
        }
        return false;
    };


    ///Diagnóstico
    let diagnostico = "";

    if (tieneSintoma("preocupación excesiva") && tieneSintoma("no poder relajarse / tensión constante") && tieneSintoma("rumiación / pensamiento obsesivo y repetitivo")) {
        diagnostico = "Diagnostico Potencial: TRASTORNO DE ANSIEDAD GENERALIZADO"
    }
    else if (tieneSintoma("pérdida de interés o placer") && tieneSintoma("fatiga / problemas para dormir") && tieneSintoma("sensación de tristeza / culpa")) {
        diagnostico = "Diagnostico Potencial: DEPRESIÓN"
    }
    else if (tieneSintoma("palpitaciones / taquicardia / temblores") && tieneSintoma("miedo a volverse loco / perder el control") && tieneSintoma("evitación (lugares o personas)")) {
        diagnostico = "Diagnostico Potencial: TRASTORNO DE PÁNICO"
    }
    else if (tieneSintoma("rumiación / pensamiento obsesivo y repetitivo") && tieneSintoma("comportamiento compulsivo")) {
        diagnostico = "Diagnostico Potencial: TRASTORNO OBSESIVO COMPULSIVO (T.O.C.)"
    }
    else if (tieneSintoma("evitación (lugares o personas)") && tieneSintoma("cambios de humor intensos")) {
        diagnostico = "Diagnostico Potencial: TRASTORNO DE ESTRÉS POST TRAUMÁTICO"
    }
    else if (tieneSintoma("rumiación / pensamiento obsesivo y repetitivo") && tieneSintoma("palpitaciones / taquicardia / temblores") && tieneSintoma("evitación (lugares o personas)")) {
        diagnostico = "Diagnostico Potencial: TRASTORNO DE ANSIEDAD SOCIAL"
    }
    else if (tieneSintoma("cambios de humor intensos") && tieneSintoma("emociones intensas e inestables")) {
        diagnostico = "Diagnostico Potencial: TRASTORNO BIPOLAR"
    }
    else if (tieneSintoma("cambios de humor intensos") && tieneSintoma("emociones intensas e inestables") && tieneSintoma("dificultad en laS relaciones") && tieneSintoma("impulsividad")) {
        diagnostico = "Diagnostico Potencial: TRASTORNO DE PERSONALIDAD BORDE"
    }
    else  {
        diagnostico = "Algunos síntomas presentes, pero no indican un cuadro claro."
    }
    alert (diagnostico);
    alert ("Gracias por usar Mindy. Este test fue creado por humanos con ansiedad funcional y memes como mecanismo de defensa. No reemplaza una consulta profesional, pero al menos te da una pauta de con qué monstruos estás lidiando")
};
evaluarSintomas();
mostrarResultados();
analizarResultados();