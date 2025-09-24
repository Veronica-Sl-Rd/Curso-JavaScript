///Determinar diagnóstico

export function obtenerDiagnostico(listaSintomas) {

    let diagnostico = "";

if (listaSintomas.includes("preocupación excesiva") && listaSintomas.includes("no poder relajarse / tensión constante") && listaSintomas.includes("rumiación / pensamiento obsesivo y repetitivo")) {
        diagnostico = "Diagnóstico Potencial: TRASTORNO DE ANSIEDAD GENERALIZADO";
    }
    else if (listaSintomas.includes("pérdida de interés o placer") && listaSintomas.includes("fatiga / problemas para dormir") && listaSintomas.includes("sensación de tristeza / culpa")) {
        diagnostico = "Diagnóstico Potencial: DEPRESIÓN";
    }
    else if (listaSintomas.includes("palpitaciones / taquicardia / temblores") && listaSintomas.includes("miedo a volverse loco / perder el control") && listaSintomas.includes("evitación (lugares o personas)")) {
        diagnostico = "Diagnóstico Potencial: TRASTORNO DE PÁNICO";
    }
    else if (listaSintomas.includes("rumiación / pensamiento obsesivo y repetitivo") && listaSintomas.includes("comportamiento compulsivo")) {
        diagnostico = "Diagnóstico Potencial: TRASTORNO OBSESIVO COMPULSIVO (T.O.C.)";
    }
    else if (listaSintomas.includes("evitación (lugares o personas)") && listaSintomas.includes("cambios de humor intensos")) {
        diagnostico = "Diagnóstico Potencial: TRASTORNO DE ESTRÉS POST TRAUMÁTICO";
    }
    else if (listaSintomas.includes("rumiación / pensamiento obsesivo y repetitivo") && listaSintomas.includes("palpitaciones / taquicardia / temblores") && listaSintomas.includes("evitación (lugares o personas)")) {
        diagnostico = "Diagnóstico Potencial: TRASTORNO DE ANSIEDAD SOCIAL";
    }
    else if (listaSintomas.includes("cambios de humor intensos") && listaSintomas.includes("emociones intensas e inestables")) {
        diagnostico = "Diagnóstico Potencial: TRASTORNO BIPOLAR";
    }
    else if (listaSintomas.includes("cambios de humor intensos") && listaSintomas.includes("emociones intensas e inestables") && listaSintomas.includes("dificultad en las relaciones") && listaSintomas.includes("impulsividad")) {
        diagnostico = "Diagnóstico Potencial: TRASTORNO DE PERSONALIDAD BORDE";
    }
    else {
        diagnostico = "Algunos síntomas presentes, pero no indican un cuadro claro.";
    }

    return diagnostico;
}