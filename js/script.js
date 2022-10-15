//funcion prom ingreso de datos

var nombre;

// nombre = prompt("ingrese su nombre de pila:");
// console.log(nombre);
// document.write(nombre + "<br>");
// la funcion PROMPT guarda cualquier dato en String

/*a = parseInt(prompt("ingrese 1°sumando:"));
b = parseInt(prompt("ingrese 1°sumando:"));

console.log(a + b);
document.write(a + b)

a = parseFloat(prompt("ingrese 1°sumando:"));
b = parseFloat(prompt("ingrese 1°sumando:"));

console.log(a + b);
document.write(a + b)


a = 123;
b = 4;
console.log(a.toString() + b.toString());
console.log(a + b);


var altura = parseFloat(prompt("ingrese su altura en mts: "));
var puerta = 2.0; //altura puerta

if (altura <= puerta) {
    console.log("pasa por la puerta");
} else {
    console.log("NO puede pasar por la puerta");
}

 var a = "msj de bienvenida";
 var b = 5;
 var c = 2;
 var d = 5 + 2;
 var b = d + 8;

 alert(a);
 console.log("el resultado es " + b);
 alert("el programa termino");

function parrafo (contenido){
    document.write('<p>' + contenido + '</p>');
}

parrafo('condicional simple');
if (condition) {
    
}

a = 7
if (a > 5){
    parrafo(b + 'es mayor q 5');
}
else{
    parrafo(b + 'es mayor q 5');
}
*/
function parrafo (contenido){
    document.write('<p>' + contenido + '</p>')
}

// arrays
// nuevo arreglo vacio "alturas" (nueva forma de definirlo)
var alturas = new Array();
// nuevo arreglo de 5 elementos llamado edades
var edades = new Array(5);
//nuevo arreglo de 3 elementos de valor conocido llamado nombres
var nombres = new Array("domingo", "juana", "luis");
// definicion de arreglos vieja manera de hacerlo(prog.estruct)
var apellidos = ["Gomez", "Perez", "Garcia"];

var caja_semanal = [
    20000, //domingo
    23000, //lunes
    25000, //martes
    21000, //mie
    32000, //jue
    23000, //vie
    27000 //sab
];
parrafo('la recaudacion del domingo fue de $ ' + caja_semanal[0]);

parrafo('la recaudacion del domingo fue de $ ' + caja_semanal[6]);
parrafo('la recaudacion del miercoles fue de $ ' + caja_semanal[3]);
parrafo('Tamaño del array es de ' + caja_semanal.length);
// nunca se puede mostrar un indicefuera del rango original del arreglo
// ni tampoco indices en valor negatico ya que siempre comienza desde cero.
caja_semanal[3] = 45000;// valor modificado
parrafo('la recaudacion del miercoles fue de $ ' + caja_semanal[3]);
// metodo para saber el ultimo valor de un array
parrafo('la recaudacion del ultimo elemnto fue de $ ' + caja_semanal[caja_semanal.length - 1]);
// recorrer un array
for (let i = 0; i < caja_semanal.length; i++) {
    // const element = array[index];
    parrafo(i + ' => ' + caja_semanal[i])
}

//agregar elementos al final de un array
parrafo(alturas.length + " => " + alturas);

alturas.push(1.76);
parrafo(alturas.length + " => " + alturas);

alturas.push(1.58);
parrafo(alturas.length + " => " + alturas);
//ver porque duplica

//elmina el ultimo valor del indice
x =alturas.pop();
parrafo(alturas.length + " => " +alturas);
parrafo('elemento eliminado: ' + x);

// agrega un valor al principio
alturas.unshift(1.88);
parrafo(alturas.length + " => " + alturas);

//borra el primer valor del primer indice
alturas.shift();
parrafo(alturas.length + " => " + alturas);

//indice de la primera aparcicion
parrafo('se encuentra en el ' + caja_semanal.indexOf(23000) + ' indice');
//indice de la ultima apricion
parrafo(caja_semanal.lastIndexOf(23000) + ' indice')

//otras formas de recorrer un array
parrafo("===========================");
parrafo("recorrido obt  kenido clave (indice)");
for (k in caja_semanal){
    parrafo(k +'//'+ caja_semanal[k]);
    
    
}
parrafo("===========================");
parrafo("recorrido obtenido valores (contenido)");
for (v of caja_semanal){
    parrafo(v);
}
var numero = 2 
function miFuncion (){
     var numero = 19
      document.write(numero) 
     //imprime 19
 } 
 

//recorrer una palabra se lo trta como un seudo arreglo
//no todos los propiedades funcionan

