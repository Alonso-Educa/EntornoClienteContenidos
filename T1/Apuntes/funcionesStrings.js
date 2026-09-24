// length
// concat
// charat(pos)
// charcodeat(p)
// indexof()
// lastindexof()
// substr(i,f)
// tolowercase()
// touppercase()
// split(c)

// CharAt(pos): Devuelve un caracter del indice 
console.log("\ncharAt(pos)");
let persona="Juan"
for(let i=0;i<persona.length;i++){
    console.log("Pos "+i+" de "+persona+". "+persona.charAt(i));
}

// Substring(i,f)
console.log("\nsubstr(i,f)");
let cadena = "cadenamuylarga";
console.log("Cadena original: "+cadena);
console.log("Substring [1,3]: "+cadena.substring(1,4));
console.log("Substring [3]: "+cadena.substring(3));
console.log("Substring [2,-2]: "+cadena.substring(2,-2));

// Split()
console.log("\nSplit:");
let cadenaSplit = "cadenamuylargaparasplita2";
console.log("Cadena original: "+cadenaSplit);
console.log("Split (''): "+cadenaSplit.split("")); // Sin caracter separa todo
console.log("Split ('a'): "+cadenaSplit.split("a"));
console.log("Split ('a',3): "+cadenaSplit.split("a",3));

// funciones math