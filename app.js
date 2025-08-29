
///Ingreso Usuario
let aliasUsuario = "";

/// Definir Síntomas
function Sintoma (nombre) {
    this.nombre = nombre;
    this.valor = 0
    this.valoresAltos = function () {
        return this.valor >=6;
    }
}

const sintomas = [
    new Sintoma("preocupación excesiva"),
    new Sintoma ("no poder relajarse / tensión constante"),
    new Sintoma("rumiación / pensamiento obsesivo y repetitivo"),
    new Sintoma("pérdida de interés o placer"),
    new Sintoma("fatiga / problemas para dormir"),
    new Sintoma("sensación de tristeza / culpa"),
    new Sintoma("comportamiento compulsivo"),
    new Sintoma("palpitaciones / taquicardia / temblores"),
    new Sintoma("miedo a volverse loco / perder el control"),
    new Sintoma("evitación (lugares o personas)"),
    new Sintoma("cambios de humor intensos"),
    new Sintoma("emociones intensas e inestables"),
    new Sintoma("dificultad en laS relaciones"),
    new Sintoma("impulsividad")
]

///Definir formulario
const form = document.getElementById("test");
sintomas.forEach(s => {
    form.innerHTML+= `
    <div class="sintoma">
        <label>${s.nombre}</label>
        <input type="number" min="0" max="10">
    </div> `;
});

///Transición (de bienvenida a formulario)
    document.getElementById("comenzar").addEventListener("click", () => {
        const alias = document.getElementById("alias").value.trim();
        if (!alias) {
            alert("Por favor, ingresá un alias antes de continuar.");
            return;
        }
        aliasUsuario = alias;
    document.getElementById("bienvenida").classList.remove("visible");
    document.getElementById("formulario").classList.add("visible");})

///Evaluación
    document.getElementById("evaluar").addEventListener("click", () =>{
    const inputs = document.querySelectorAll("input[type='number']");
    for(let i = 0; i < sintomas.length; i++) {
    sintomas[i].valor = parseInt(inputs[i].value) || 0;};
    
const tieneSintoma = sintomas.filter(s => s. valoresAltos());
const listaSintomas = tieneSintoma.map(s => s.nombre);

///Diagnóstico
let diagnostico = "";

if (listaSintomas.includes("preocupación excesiva") && listaSintomas.includes("no poder relajarse / tensión constante") && listaSintomas.includes("rumiación / pensamiento obsesivo y repetitivo")) {
    diagnostico = "Diagnostico Potencial: TRASTORNO DE ANSIEDAD GENERALIZADO"
    }
    else if (listaSintomas.includes("pérdida de interés o placer") && listaSintomas.includes("fatiga / problemas para dormir") && listaSintomas.includes("sensación de tristeza / culpa")) {
        diagnostico = "Diagnostico Potencial: DEPRESIÓN"
    }
    else if (listaSintomas.includes("palpitaciones / taquicardia / temblores") && listaSintomas.includes("miedo a volverse loco / perder el control") && listaSintomas.includes("evitación (lugares o personas)")) {
        diagnostico = "Diagnostico Potencial: TRASTORNO DE PÁNICO"
    }
    else if (listaSintomas.includes("rumiación / pensamiento obsesivo y repetitivo") && listaSintomas.includes("comportamiento compulsivo")) {
        diagnostico = "Diagnostico Potencial: TRASTORNO OBSESIVO COMPULSIVO (T.O.C.)"
    }
    else if (listaSintomas.includes("evitación (lugares o personas)") && listaSintomas.includes("cambios de humor intensos")) {
        diagnostico = "Diagnostico Potencial: TRASTORNO DE ESTRÉS POST TRAUMÁTICO"
    }
    else if (listaSintomas.includes("rumiación / pensamiento obsesivo y repetitivo") && listaSintomas.includes("palpitaciones / taquicardia / temblores") && listaSintomas.includes("evitación (lugares o personas)")) {
        diagnostico = "Diagnostico Potencial: TRASTORNO DE ANSIEDAD SOCIAL"
    }
    else if (listaSintomas.includes("cambios de humor intensos") && listaSintomas.includes("emociones intensas e inestables")) {
        diagnostico = "Diagnostico Potencial: TRASTORNO BIPOLAR"
    }
    else if (listaSintomas.includes("cambios de humor intensos") && listaSintomas.includes("emociones intensas e inestables") && listaSintomas.includes("dificultad en laS relaciones") && listaSintomas.includes("impulsividad")) {
        diagnostico = "Diagnostico Potencial: TRASTORNO DE PERSONALIDAD BORDE"
    }
    else  {
        diagnostico = "Algunos síntomas presentes, pero no indican un cuadro claro."}


const sintomasRelevantes = sintomas.filter(s => s.valoresAltos());
const resultado = {
    fecha : new Date().toLocaleString(),
    diagnostico : diagnostico,
    valoresSintomas : sintomasRelevantes.map(s => ({
        sintoma : s.nombre,
        valor: s.valor
    }))
};

///Guardar Resultados
const historial = JSON.parse(localStorage.getItem(aliasUsuario)) || [];
historial.push(resultado);
localStorage.setItem(aliasUsuario, JSON.stringify(historial));

///Transición de formulario a resultados
document.getElementById("formulario").classList.remove("visible");
document.getElementById("resultados").classList.add("visible");

///Mostrar Resultados
document.getElementById("mensaje").innerText = resultado.diagnostico;

const detalles = document.getElementById("detalles");
detalles.innerHTML = `
<p><strong>Fecha;</strong> ${resultado.fecha}</p>
<ul> 
${resultado.valoresSintomas.map(s => `<li>${s.sintoma.toUpperCase()}; ${s.valor}</li>`).join('')}`;
});

///Transición de resultados a formulario
document.getElementById("volver").addEventListener("click", () => {
document.getElementById("resultados").classList.remove("visible");
document.getElementById("formulario").classList.add("visible");

document.getElementById("test").reset();
sintomas.forEach(s => s.valor = 0);
});

///Ver Historial
document.getElementById("historial").addEventListener("click", () => {
    const alias = document.getElementById("alias").value.trim();
    if (!alias) {
        alert("Por favor, ingresá un alias antes de continuar.");
        return;
    }

    const buscarHistorial = JSON.parse(localStorage.getItem(alias)) || [];

    if (buscarHistorial.length === 0) {
        alert("Todavía no tenés resultados guardados.");
        return;
    }

    let verHistorial = ` Historial de ${alias}:\n`;
    buscarHistorial.forEach((his, i) => {
        verHistorial += `#${i + 1} - ${his.fecha}\n ${his.diagnostico}\n "Síntomas relevantes:\n"`;
        his.valoresSintomas.forEach(s => {
            verHistorial += `  - ${s.sintoma.toUpperCase()}: ${s.valor}\n\n`;
        });
    });

    alert(verHistorial);
});

///Transición de resultados a salir
document.getElementById("salir").addEventListener("click", () => {
document.getElementById("resultados").classList.remove("visible");
document.getElementById("bienvenida").classList.add("visible");
document.getElementById("alias").value = "";
})