let movies = {
    nombre1: 'Flash',
    nombre2: 'Spiderman',
    nombre3: 'Dracula',
    precio_peli_1: 15000,
    precio_peli_2: 14000,
    precio_peli_3: 14000,
    EnSalas: true,
    lugar: {
        lat:  6.286560407041589,
        lng: -75.55905589999999
    },

};

//mostrar todos los elementos del objeto
console.warn("mostrar todos los elementos del objeto");
console.log(movies);

//mostrar el elemento del lugar - 1 elemento
console.warn("mostrar el elemento del lugar");
console.log('El lugar es', movies.lugar);
//o tambien
console.log('El lugar es', movies['lugar']);

//mostrar elementos especificos - 2 o mas elementos
console.warn("mostrar elementos especificos");
console.log("Flash y Dracula :", movies.nombre1, movies.nombre3);

//mostrar ultimo elemento
let infUltimoElemento = movies{movies.length-1};
console.log("mostrar el ultimo elemento: ", infUltimoElemento);