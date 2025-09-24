
/// Definir Síntomas
export function Sintoma(nombre) {
    this.nombre = nombre;
    this.valor = 0;
    this.valoresAltos = function () {
        return this.valor >= 6;
    };
}

export async function cargarSintomas() {
    const resp = await fetch("./data/sintomas.json");
    const data = await resp.json();
    return data.map(item => new Sintoma(item.nombre));
}