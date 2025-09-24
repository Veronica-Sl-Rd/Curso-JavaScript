import { Sintoma, cargarSintomas } from "./sintomas.js";
import { obtenerDiagnostico } from "./diagnostico.js";

///Ingreso Usuario
let aliasUsuario = "";

let sintomas = [];

///Carga del DOM
document.addEventListener("DOMContentLoaded", async () => {
    sintomas = await cargarSintomas();

    ///Definir formulario
    const form = document.getElementById("test");
    sintomas.forEach(s => {
        form.innerHTML += `
        <div class="sintoma">
            <label>${s.nombre}</label>
            <input type="number" min="0" max="10">
        </div> `;
    });
});

///Función de Transición
function transicion(seccion1, seccion2) {
    document.getElementById(seccion1).classList.remove("visible");
    document.getElementById(seccion2).classList.add("visible");
}

///Transición (de bienvenida a formulario)
document.getElementById("comenzar").addEventListener("click", () => {
    const alias = document.getElementById("alias").value.trim();
    if (!alias) {
        Swal.fire({
            title: "¡No tan rápido!",
            text: "Por favor, ingresá un alias antes de continuar.",
            icon: "warning",
            theme: "borderless",
            confirmButtonColor: '#479c80ff',
        });
        return;
    }
    aliasUsuario = alias;
    transicion("bienvenida", "formulario")
});

///Evaluación
document.getElementById("evaluar").addEventListener("click", () => {
    const inputs = document.querySelectorAll("input[type='number']");
    for (let i = 0; i < sintomas.length; i++) {
        sintomas[i].valor = parseInt(inputs[i].value) || 0;
    };

    const tieneSintoma = sintomas.filter(s => s.valoresAltos());
    const listaSintomas = tieneSintoma.map(s => s.nombre);

    ///Diagnóstico
    let diagnostico = obtenerDiagnostico(listaSintomas);

    const resultado = {
        fecha: new Date().toLocaleString(),
        diagnostico: diagnostico,
        valoresSintomas: tieneSintoma.map(s => ({
            sintoma: s.nombre,
            valor: s.valor
        }))
    };

    ///Guardar Resultados
    const historial = JSON.parse(localStorage.getItem(aliasUsuario)) || [];
    historial.push(resultado);
    localStorage.setItem(aliasUsuario, JSON.stringify(historial));

    ///Transición (de formulario a resultados)
    transicion("formulario", "resultados");

    ///Mostrar Resultados
    document.getElementById("mensaje").innerText = resultado.diagnostico;

    const detalles = document.getElementById("detalles");
    detalles.innerHTML = `
    <p><strong>Fecha;</strong> ${resultado.fecha}</p>
    <ul> 
    ${resultado.valoresSintomas.map(s => `<li>${s.sintoma.toUpperCase()}; ${s.valor}</li>`).join('')}`;
});

///Transición (de resultados a formulario)
document.getElementById("volver").addEventListener("click", () => {
    transicion("resultados", "formulario");

    document.getElementById("test").reset();
    sintomas.forEach(s => s.valor = 0);
});

///Ver Historial
document.getElementById("historial").addEventListener("click", () => {
    const alias = document.getElementById("alias").value.trim();
    if (!alias) {
        Swal.fire({
            title: "¡No tan rápido!",
            text: "Por favor, ingresá un alias antes de continuar.",
            icon: "warning",
            confirmButtonColor: '#479c80ff',
        });
        return;
    }

    const buscarHistorial = JSON.parse(localStorage.getItem(alias)) || [];

    if (buscarHistorial.length === 0) {
        Swal.fire({
            text: "¡Todavía no tenés resultados guardados.!",
            confirmButtonColor: '#479c80ff',
        });
        return;
    }

    let verHistorial = ` Historial de ${alias}:<br><br>`;
    buscarHistorial.forEach((his, i) => {
        verHistorial += `<b>#${i + 1}</b> ${his.fecha}<br> ${his.diagnostico}<br> "Síntomas relevantes:"\n`;
        his.valoresSintomas.forEach(s => {
            verHistorial += `  - ${s.sintoma.toUpperCase()}: ${s.valor}<br>`;
        });
    });

    Swal.fire({
        title: "Historial",
        html: `<div style="max-height:300px; overflow:auto; text-align:left; font-family:monospace;">
        <pre>${verHistorial}</pre>
        </div>`,
        width: 700,
        showCancelButton: true,
        confirmButtonText: "Cerrar",
        cancelButtonText: "Borrar",
        confirmButtonColor: '#479c80ff',
        cancelButtonColor: '#878888ff',
    }).then(result => {
        if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire({
                title: "¿Seguro que querés borrar tu historial?",
                text: "Esta acción no se puede deshacer",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: '#479c80ff',
                cancelButtonColor: '#878888ff',
                confirmButtonText: "Sí, borrar",
                cancelButtonText: "Cancelar"
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.removeItem(aliasUsuario);
                    Swal.fire({
                        title: "Eliminado", 
                        text: "Tu historial fue borrado.", icon: "success",
                        confirmButtonColor: '#479c80ff', })
                }
            });
        }
    });
});

///Transición (de resultados a salir)
document.getElementById("salir").addEventListener("click", () => {
    transicion("resultados", "bienvenida");
    document.getElementById("alias").value = "";
})