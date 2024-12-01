export function gerarDiaDaSemana() {
    const data = new Date();
    const diaSemana = data.toLocaleDateString("pt-BR", { weekday: "long" });
    const diaSemanaComInicialMaiuscula = diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1);

    return `${diaSemanaComInicialMaiuscula} (${data.toLocaleDateString()}) às ${data.toLocaleTimeString("pt-BR", { hour: "numeric", minute: "numeric" })}`;
}