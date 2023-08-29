//como inicializar un arreglo: array de juegos

const videoJuegos = ['mario bros', 'mario 3', 'megaman', 1999, 2000+545, 0, true];

//mostrar todos los datos del array
console.log(videoJuegos);

//mostrar el primer o algun dato del arrray
console.log('El primer datos es: ',videoJuegos[0]);
console.log('El primer datos es: ',videoJuegos[3]);
console.log('El primer datos es: ',videoJuegos[5]);

//mostrar posicion del ultimo dato del arrray
console.log('posicion del ultimo dato: ',videoJuegos.length-1);

//mostrar posicion del ultimo dato del arrray
let infUltimoDato = videoJuegos[videoJuegos.length-1]
console.log('posicion del ultimo dato: ', infUltimoDato);

//metodo para añadir un nuevo elemento a la array - push
let nuevoJuego = videoJuegos.push('resident evil');
console.log(videoJuegos);

//metodo para añadir un nuevo elemento a la array en la primera posicion - unshift
let newJuego = videoJuegos.unshift('dragon ball');
console.log(videoJuegos);

//eliminar el ultimo elemento de la array - pop 
let borrarJuego = videoJuegos.pop();
console.log(videoJuegos);

//eliminar un elemento especifico o por indice de la array - splice (posicion, 1 elemento)
let posicion = 3;
let eliminarJuego = videoJuegos.splice(posicion, 1);
console.log(videoJuegos);

