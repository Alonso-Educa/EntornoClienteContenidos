const re1=RegExp('hola');
const re2=/hola/; // equivalente a re1
console.log(re1.test("hola mundo"));
console.log(re2.test("Hola mundo")); // sensible a mayusculas

// Para buscar en un string que comience por un patrón se usa '^' al principio
// Para buscar en un string que termine por un patrón se usa '$' al final
// '.' representa un patron o caracter cualquiera (diferente a nueva linea '\n')
// '.*' es un patrón para cero o más caracteres cualquiera
// [a-z] representa un caracter cualquiera en el rango a-z (otros rangos: [0-0], [xyz], [A-Z], [A-Za-z])
// si se pone el simbolo '^' dentro de un rango este lo niega, [^0-9] representa un caracter no numérico 

console.log("\nComprobaciones:");
console.log(/^hello/.test('hola mundo')); // falso porque no empieza por 'hello'
console.log(/world$/.test('hola mundo')); // falso porque no termina en 'world'
console.log(/mundo$/.test('hola mundo')); // verdadero porque termina en 'mundo'
console.log(/^h.*o$/.test('hola mundo')); // verdadero porque empieza por h, hay n de caracteres cualquiera y termina por o
console.log(/^[0-9]/.test('hola mundo')); // falso porque no empieza por un numero
console.log(/[u-v]/.test('hola mundo')); // verdadero porque contiene un valor en el rango [u-v] -> u

console.log("\nNuevas comprobaciones:");
console.log(/ /.test('hola mundo')); //verdadero porque hay un espacio
console.log(/hola$/.test('hola mundo')); // falso porque no acaba por hola
console.log(/[a-z]/.test('1234567890'));
console.log(/[^a-zA-Z0-9]/.test('1234567890a'));
console.log(/[^a-zA-Z0-9$]/.test('1234567890.')); // verdadero porque acaba en un caracter no numérico ni letra (el $ se comporta igual dentro y fuera del rango)
console.log(/^[^A-Z]/.test('HOLA MUNDO')); // falso porque no empieza por un caracter diferne
console.log(/[^a-d]/.test('abcd')); //