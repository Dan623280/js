let nombre = prompt("Colocar nombre")
let edad = prompt("Colocar edad")

let mensaje_menor = "Hola " + [nombre]+", eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!"
let mensaje_mayor = "Hola "+ [nombre] +", eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!"
let mensaje_error_dato = "hubo un error al colocar el dato de la edad cargue la pagina de nuevo y coloque un dato valido"

let mensaje = edad < 18 ? mensaje_menor : edad >= 18 ? mensaje_mayor : mensaje_error_dato


alert(mensaje)