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
console.log(/[a-z]/.test('1234567890')); // falso porque no tiene ninguna letra minúsula
console.log(/[^a-zA-Z0-9]/.test('1234567890a')); // falso porque no empieza por ningún caracter que no sea numérico o letra
console.log(/[^a-zA-Z0-9$]/.test('1234567890.')); // verdadero porque acaba en un caracter no numérico ni letra (el $ se comporta como un caracter literal dentro)
console.log(/^[^A-Z]/.test('HOLA MUNDO')); // falso porque no empieza por un caracter difernte
console.log(/[^a-d]/.test('abcd')); // falso porque no contiene ningún caracter que no sean minúsculas

// \d representa un digito cualquiera, equivale a [0-9]
// \D representa un caracter que no es un digito, equivale a [^0-9]
// \w representa una letra, un digito o '_', equivale a [A-Za-z0-9_]
// \W representa un caracter que no es letra, digito ni '_', equivale a [^A-Za-z0-9_]
// \s representa un espacio en blanco (espacio, tabulador, salto de linea...)
// \S representa un caracter que no es un espacio en blanco
// \n representa un salto de linea

console.log("\nNuevas comprobaciones 2:");
console.log(/\d/.test('hola 2026')); // verdadero porque contiene un digito
console.log(/\d/.test('hola mundo')); // falso porque no hay ningun digito
console.log(/\D/.test('12345')); // falso porque todos son digitos
console.log(/\D/.test('123a45')); // verdadero porque la 'a' no es un digito
console.log(/\w/.test('!!!')); // falso porque no hay letras, digitos ni '_'
console.log(/^\w*$/.test('hola_123')); // verdadero porque todos son letras, digitos o '_'
console.log(/\W/.test('hola mundo')); // verdadero porque el espacio no es de tipo \w
console.log(/\W/.test('hola_mundo')); // falso porque '_' si es de tipo \w
console.log(/\s/.test('hola mundo')); // verdadero porque hay un espacio
console.log(/\s/.test('holamundo')); // falso porque no hay espacios
console.log(/\S/.test('   ')); // falso porque solo hay espacios
console.log(/\S/.test('  a  ')); // verdadero porque la 'a'  no es un espacio
console.log(/\n/.test('hola\nmundo')); // verdadero porque hay un salto de linea
console.log(/\n/.test('hola mundo')); // falso porque no hay salto de linea
console.log(/^.$/.test('a')); // verdadero porque es un unico caracter cualquiera
console.log(/^.$/.test('ab')); // falso porque hay dos caracteres y '.' solo representa uno
console.log(/^.$/.test('\n')); // falso porque '.' no representa el salto de linea