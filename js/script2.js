console.warn("segunda hoja");

function parrafo(contenido) {
    document.write('<p>' + contenido + '</p>');
}
let frutas = ["manzana", "Banana", "limon"];

parrafo(frutas[0]);

let ultimo = frutas[frutas.length - 1]
parrafo(ultimo);
parrafo(frutas.length - 2)
//recorrer con for each

// frutas.forEach(element => {
//     parrafo(element)
// });

frutas.forEach(function (elemento, index) {
    parrafo('indice: ' + index + ' ,fruta: ' + elemento);
});
frutas.push('naranja');
for (let i = 0; i < frutas.length; i++) {
    const element = frutas[i];
    parrafo(element + '=>' + i);
}
parrafo(frutas);

frutas.pop();//borra el ultimo
parrafo(frutas);

frutas.unshift('frutilla'); //agrega al inicio del array
parrafo(frutas);

parrafo(frutas.indexOf('manzana')) //dev tipo
parrafo('restos' + frutas);
var deleteados = frutas.slice(2, 3);
parrafo('borrados: ' + deleteados);
parrafo('restos' + frutas);
parrafo('========================0=====');

/*var ahorro = 0;
ni = parseInt(prompt('ingrese el nuevo monto: '));
while (ni > 0) {
    ahorro += ni;
    alert('nuevo saldo: ' + ahorro);
    parrafo('nuevo saldo: ' + ahorro);
    ni = parseInt(prompt('ingrese el nuevo monto: '));
}
alert('nuevo saldo: ' + ahorro);
parrafo('nuevo saldo final: ' + ahorro);

// document.write('nuevo saldo en caja de ahorro: ' + ahorro);
console.log(4>2 || 3>1)
console.log(!1>3)

// Variable = (condición) ? valor1 : valor2 otra forma de usar el IF

var dia_de_semana = parseInt(prompt('indique numero del dia de la semana: '));

switch (dia_de_semana) {
    case 1:
        document.write('es lunes')
        break;
    case 2:
        document.write('es martes')
        break;
    case 3:
        document.write('es miercoles')
        break;
    case 4:
        document.write('es jueves')
        break;
    case 5:
        document.write('es viernes')
        break;
    case 6:
    // document - write('es lunes')
    // break; se elimina la opcion y el break para q ejectur el 
    //caso 7 directamente para este eje.
    case 7:
        document.write('es lunes')
        break;
    default:
        document.write('no existe dia mayor a 7')
        break;
}   var i
for (i = 0; i <= 10; i++) {
    document.write(i)
    document.write("<br>")
}
*/
// while

var color = ""
while (color != "rojo"){
 color = prompt("dame un color (escribe rojo para salir)","")
}




