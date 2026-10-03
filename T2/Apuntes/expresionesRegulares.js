const re1 = RegExp("hola");
const re2 = /hola/; // equivalente a re1
console.log(re1.test("hola mundo"));
console.log(re2.test("Hola mundo")); // sensible a mayusculas

// Para buscar en un string que comience por un patrón se usa '^' al principio
// Para buscar en un string que termine por un patrón se usa '$' al final
// '.' representa un patron o caracter cualquiera (diferente a nueva linea '\n')
// '.*' es un patrón para cero o más caracteres cualquiera
// [a-z] representa un caracter cualquiera en el rango a-z (otros rangos: [0-0], [xyz], [A-Z], [A-Za-z])
// si se pone el simbolo '^' dentro de un rango este lo niega, [^0-9] representa un caracter no numérico
// () para agrupar grupos de caracteres

console.log("\nComprobaciones:");
console.log(/^hello/.test("hola mundo")); // falso porque no empieza por 'hello'
console.log(/world$/.test("hola mundo")); // falso porque no termina en 'world'
console.log(/mundo$/.test("hola mundo")); // verdadero porque termina en 'mundo'
console.log(/^h.*o$/.test("hola mundo")); // verdadero porque empieza por h, hay n de caracteres cualquiera y termina por o
console.log(/^[0-9]/.test("hola mundo")); // falso porque no empieza por un numero
console.log(/[u-v]/.test("hola mundo")); // verdadero porque contiene un valor en el rango [u-v] -> u

console.log("\nNuevas comprobaciones:");
console.log(/ /.test("hola mundo")); //verdadero porque hay un espacio
console.log(/hola$/.test("hola mundo")); // falso porque no acaba por hola
console.log(/[a-z]/.test("1234567890")); // falso porque no tiene ninguna letra minúsula
console.log(/[^a-zA-Z0-9]/.test("1234567890a")); // falso porque no empieza por ningún caracter que no sea numérico o letra
console.log(/[^a-zA-Z0-9$]/.test("1234567890.")); // verdadero porque acaba en un caracter no numérico ni letra (el $ se comporta como un caracter literal dentro)
console.log(/^[^A-Z]/.test("HOLA MUNDO")); // falso porque no empieza por un caracter difernte
console.log(/[^a-d]/.test("abcd")); // falso porque no contiene ningún caracter que no sean minúsculas

// \d representa un digito cualquiera, equivale a [0-9]
// \D representa un caracter que no es un digito, equivale a [^0-9]
// \w representa una letra, un digito o '_', equivale a [A-Za-z0-9_]
// \W representa un caracter que no es letra, digito ni '_', equivale a [^A-Za-z0-9_]
// \s representa un espacio en blanco (espacio, tabulador, salto de linea...)
// \S representa un caracter que no es un espacio en blanco
// \n representa un salto de linea

console.log("\nNuevas comprobaciones 2:");
console.log(/\d/.test("hola 2026")); // verdadero porque contiene un digito
console.log(/\d/.test("hola mundo")); // falso porque no hay ningun digito
console.log(/\D/.test("12345")); // falso porque todos son digitos
console.log(/\D/.test("123a45")); // verdadero porque la 'a' no es un digito
console.log(/\w/.test("!!!")); // falso porque no hay letras, digitos ni '_'
console.log(/^\w*$/.test("hola_123")); // verdadero porque todos son letras, digitos o '_'
console.log(/\W/.test("hola mundo")); // verdadero porque el espacio no es de tipo \w
console.log(/\W/.test("hola_mundo")); // falso porque '_' si es de tipo \w
console.log(/\s/.test("hola mundo")); // verdadero porque hay un espacio
console.log(/\s/.test("holamundo")); // falso porque no hay espacios
console.log(/\S/.test("   ")); // falso porque solo hay espacios
console.log(/\S/.test("  a  ")); // verdadero porque la 'a'  no es un espacio
console.log(/\n/.test("hola\nmundo")); // verdadero porque hay un salto de linea
console.log(/\n/.test("hola mundo")); // falso porque no hay salto de linea
console.log(/^.$/.test("a")); // verdadero porque es un unico caracter cualquiera
console.log(/^.$/.test("ab")); // falso porque hay dos caracteres y '.' solo representa uno
console.log(/^.$/.test("\n")); // falso porque '.' no representa el salto de linea

// ?: representa 0 - 1 elementos
// *: Representa 0 - n elementos
// +: Representa 1 - n elementos
// {n}: Representa n elementos
// {n,m}: Representa n - m elementos
// {n,}: Representa n o más elementos
console.log("\nNuevas comprobaciones 3:");
console.log(/^a\d?/.test("abc")); // true
console.log(/^a\d?/.test("ab3")); // true
console.log(/^a\d/.test("abc")); // false
console.log(/^a\d/.test("ab3")); // false
console.log(/\d{3}/.test("h34a")); // false
console.log(/\d{3}/.test("h346a")); // true
console.log(/[a-c]{3,}/.test("--cab--")); // true

console.log(/^a*\D$/.test("abc3")); // false porque no acaba por un caracter que no sea digito
console.log(/^a{2,4}\d+/.test("aaaa5")); // true porque empieza por 2-4 a y después tiene al menos un digito
console.log(/^a{4}\d+/.test("aaaab5")); // false porque entre la condicion de la a y del digito hay una b
console.log(/^a{2,4}\d+$/.test("aaaab5")); // false porque entre la condicion de la a y del digito hay una b
console.log(/^h.*a{3,}\w?$/.test("holaaa")); // true porque empieza por h, contiene minimo 3 a y acaba por una letra
console.log(/^fa{2,7}\d+/.test("faaaaaaaa4")); // false porque después del rango de a va una letra y no un digito
// false porque aunque cumpla las condiciones de inicio y fin, contiene caracteres entre medias y eso no entra en la expresion
console.log(/^[a-c]{3,7}[a-c]{3,7}$/.test("abcaaabcholaabcabcaa"));
// true porque al contrario que la expresión anterior, esta sí permite caracteres entre medias de las dos condiciones
console.log(/^[a-c]{3,7}.*[a-c]{3,7}$/.test("abcaaabcholaabcabcaa"));
console.log(/^[a-c]{3,7}[a-c]{3,7}$/.test("abaabc")); // true porque empieza por el patron [a-c] y acaba por ese mismo patron, permite de 6 a 14 caracteres así
// console.log(/^[a-c]{3,7}$/.test('aaaaaaagggaaaaaaa')); // 
console.log(/^Sba?c*7$/.test('Sbacccccc7'));

// los paréntesis permiten agrupar grupos de caracteres
console.log(/^(Sba)?c*7$/.test('c7'));
console.log(/^(abc){2}.(\d)/.test('--abcabcx4--'));

// Comprobar que una expresion regular comience por entre tres y 9 [a-c], pueda contener caracteres entre medias y termine por entre 3 y 9 letras [a-c]. 
// Ejemplos: abc=true, abclabc=true, abcabcabcabc=true, abcabclabcabc=true
console.log("\nabc: "+/^[a-c]{3,9}.*[a-c]{3,9}$/.test('abc'));
console.log("abclabc: "+/^[a-c]{3,9}.*[a-c]{3,9}$/.test('abclabc'));
console.log("abcabcabcabc: "+/^[a-c]{3,9}.*[a-c]{3,9}$/.test('abcabcabcabc'));
console.log("abcabclabcabc: "+/^[a-c]{3,9}.*[a-c]{3,9}$/.test('abcabclabcabc'));

console.log("\nabc: "+/^([a-c]{3,9}[a-c]{3,9}$)||(^[a-c]{3,9}.*([a-c]{3,9}$))/.test('abc'));
console.log("abclabc: "+/(^[a-c]{3,9}[a-c]{3,9}$)||(^[a-c]{3,9}.*([a-c]{3,9}$))/.test('abclabc'));
console.log("abcabcabcabc: "+/^([a-c]{3,9}[a-c]{3,9}$)||(^[a-c]{3,9}.*([a-c]{3,9}$))/.test('abcabcabcabc'));
console.log("abcabclabcabc: "+/^([a-c]{3,9}[a-c]{3,9}$)||(^[a-c]{3,9}.*([a-c]{3,9}$))/.test('abcabclabcabc'));