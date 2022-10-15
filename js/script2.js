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
    parrafo('indice: ' + index +' ,fruta: '+ elemento); 
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

