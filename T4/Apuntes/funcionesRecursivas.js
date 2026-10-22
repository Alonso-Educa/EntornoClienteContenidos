"use strict";

let fib = n => {
    if (n > 0) {
        let a = 0;
        let b = 1;
        let c;
        for (let i = 0; i < n; i++) {
            c = a + b;
            a = b;
            b = c;
        }
        return c;
    } else if (n == 0) {
        return n;
    } else {
        return "El número no puede ser menor a 1.";
    }
};

let fibR = n => {
    if (n == 0 || n == 1) {
        return 1;
    } else if (n < 0) {
        return "El número no puede ser menor a 1.";
    }
    else {
        return fibR(n - 1) + fib(n - 2);
    }
}
console.log("Secuencia de fibonacci:");
for (let i = -1; i <= 10; i++) {
    console.log(`Fibonacci (${i}): ` + fib(i));
}
for (let i = -1; i <= 10; i++) {
    console.log(`FibonacciR (${i}): ` + fibR(i));
}

let fact = n => {
    if (n == 0) {
        return 1;
    } else if (n > 0) {
        return fact(n - 1) * n;
    } else {
        return "No se puede calcular el factorial de un numero negativo.";
    }
}

console.log("\nSecuencia factorial:");
for (let i = -1; i <= 10; i++) {
    console.log(`Factorial (${i}): ` + fact(i));
}

let palR = s => {
    if (s.length > 1) {
        if (s.indexOf(0) !== s.indexOf(s.length - 1)) {
            return false;
        } else {
            return palR(s.substring(1, -1));
        }
    } else {
        return true;
    }
}
console.log("\nPalindromos:");
console.log(palR("hola"));
console.log(palR("12321"));
console.log(palR("123454321"));
console.log(palR("1234554321"));
console.log(palR("123"));
console.log(palR("hola"));