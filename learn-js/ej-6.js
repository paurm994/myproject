let horas = Number(prompt("Introduce la cantidad de HORAS"))
let minutos = Number(prompt("Introduce la cantidad de MINUTOS"))

const SEGUNDOS_EN_HORA = horas * 60 * 60
const SEGUNDOS_EN_MINUTOS = minutos * 60

let segundosTotales = SEGUNDOS_EN_HORA + SEGUNDOS_EN_MINUTOS

document.write("En " + horas + " horas y " + minutos + " minutos, hay un total de " + segundosTotales + " segundos!")
