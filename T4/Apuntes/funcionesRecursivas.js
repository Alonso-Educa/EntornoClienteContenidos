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
        return "No se puede calcular la secuencia de Fibonacci de un numero negativo.";
    }
};

let fibR = n => {
    if (n == 0 || n == 1) {
        return n;
    } else if (n < 0) {
        return "No se puede calcular la secuencia de Fibonacci de un numero negativo.";
    } else {
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
    if (n > 0) {
        let f = 1;
        for (let i = 1; i <= n; i++) {
            f *= i;
        }
        return f;
    } else if (n == 0) {
        return 1;
    } else {
        return "No se puede calcular el factorial de un numero negativo.";
    }
}

let factR = n => {
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
for (let i = -1; i <= 10; i++) {
    console.log(`FactorialR (${i}): ` + factR(i));
}

let palR = s => {
    if (s.length > 1) {
        if (s.charAt(0) !== s.charAt(s.length - 1)) {
            return false;
        } else {
            return palR(s.slice(1, -1));
        }
    } else {
        return true;
    }
}

console.log("\nPalindromos:");
console.log("hola: " + palR("hola"));
console.log("12321: " + palR("12321"));
console.log("123454321: " + palR("123454321"));
console.log("1234554321: " + palR("1234554321"));
console.log("123: " + palR("123"));
console.log("12345564321: " + palR("12345564321"));
console.log("123456564321: " + palR("123456564321"));
console.log("1234565654321: " + palR("1234565654321"));