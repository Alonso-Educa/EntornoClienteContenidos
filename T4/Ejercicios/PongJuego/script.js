"use strict";

const CANVAS = document.getElementById("game-canvas"); // se obtiene la referencia al canvas
const CTX = CANVAS.getContext("2d"); // se obtiene el renderizador y se renderiza en 2d
let lastTimestamp = null;

const baseWallHitbox = {
    left: -Infinity,
    right: Infinity,
    top: -Infinity,
    bottom: Infinity,
};

const colliders = [
    { hitbox: { ...baseWallHitbox, right: 0 } },
    { hitbox: { ...baseWallHitbox, left: CANVAS.width } },
    { hitbox: { ...baseWallHitbox, bottom: 0 } },
    { hitbox: { ...baseWallHitbox, top: CANVAS.height } },
];


class GameObject {
    asset;
    ctx;
    size = { w: undefined, h: undefined };
    pos = { x: 0, y: 0 };
    origin = { x: 0.5, y: 0.5 };
    constructor(url, ctx) {
        this.asset = new Image();
        this.asset.src = url;
        this.ctx = ctx;
    }
    async preload() {
        await this.asset.decode();
        if (this.size.w === undefined) {
            this.size.w = this.asset.width;
            this.size.h = this.asset.height;
        }
    }
    get hitbox() {
        const left = this.pos.x - this.size.w * this.origin.x;
        const top = this.pos.y - this.size.h * this.origin.y;
        return {
            left,
            right: left + this.size.w,
            top,
            bottom: top + this.size.h,
        };
    }
    draw() {
        const { left, top } = this.hitbox;
        this.ctx.drawImage(this.asset, left, top);
    }
    onCollide() { }
}

// clase de la bola
class Ball extends GameObject {
    pos = { x: 50, y: 50 };
    vel = { x: 150, y: 150 };
    move(dt) {
        this.pos.x += this.vel.x * dt;
        this.pos.y += this.vel.y * dt;
    }
    onCollide({ x, y }) {
        if (x) {
            this.vel.x = -this.vel.x;
        }
        if (y) {
            this.vel.y = -this.vel.y;
        }
    }
    acelerar() {
        if (Math.abs(this.vel.x <= 500)) {
            this.vel.x *= 1.0001;
        }
        if (Math.abs(this.vel.y <= 500)) {
            this.vel.y *= 1.0001;
        }
    }
}

// se dibuja la pelota con ctx.drawImage() para renderizar la bola como png en el canvas
// tambien se puede usar ctx.arcTo() y ctx.fill() para dibujar un circulo
// clase pala
class Paddle extends GameObject {
    origin = { x: 0.5, y: 1 };
    constructor(url, ctx) {
        super(url, ctx);
        this.pos = { x: ctx.canvas.width / 2, y: ctx.canvas.height - 5 };
    }
}

// requestAnimationFrame() llama al renderizado siempre que pueda dibujar
// requestAnimationFrame(update);
const BALL = new Ball("img/ball.png", CTX);
const PADDLE = new Paddle("img/paddle.png", CTX);
colliders.push(PADDLE);

CANVAS.addEventListener("pointermove", (event) => {
    if (PADDLE.size.w === undefined) {
        return;
    }
    const bounds = CANVAS.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) * CANVAS.width) / bounds.width;
    PADDLE.pos.x = Math.max(
        PADDLE.size.w / 2,
        Math.min(CANVAS.width - PADDLE.size.w / 2, x),
    );
});


// promesa
Promise.all([BALL, PADDLE].map((obj) => obj.preload())).then(() => {
    BALL.pos.x = PADDLE.pos.x;
    BALL.pos.y = PADDLE.hitbox.top - BALL.size.h / 2;
    requestAnimationFrame(update);
});

function update(timestamp) {
    const DT = lastTimestamp === null ? 0 : (timestamp - lastTimestamp) / 1000;
    lastTimestamp = timestamp;
    moveBall(DT);
    CTX.fillStyle = "#abcdef"; // color de fondo
    CTX.fillRect(0, 0, CANVAS.width, CANVAS.height); // se rellena en forma de rectangulo, misma proporcion de valores
    BALL.draw();
    PADDLE.draw();
    BALL.acelerar();

    // contenido extra
    // handleWallCollisions(BALL, CANVAS.width, CANVAS.height);

    requestAnimationFrame(update);
}

// function handleWallCollisions(object, width, height) {
//     const hitbox = object.hitbox;
//     const hittingLeftBoundary = hitbox.left <= 0 && object.vel.x < 0;
//     const hittingRightBoundary = hitbox.right >= width && object.vel.x > 0;
//     const hittingTopBoundary = hitbox.top <= 0 && object.vel.y < 0;
//     const hittingBottomBoundary = hitbox.bottom >= height && object.vel.y > 0;

//     const x = hittingLeftBoundary || hittingRightBoundary;
//     const y = hittingTopBoundary || hittingBottomBoundary;
//     if (x || y) {
//         object.onCollide({ x, y });
//     }
// }

function getCollision(moving, velocity, obstacle, dt) {
    const width = moving.right - moving.left;
    const height = moving.bottom - moving.top;
    const movingPos = { x: moving.left, y: moving.top };
    const left = obstacle.left - width;
    const right = obstacle.right;
    const top = obstacle.top - height;
    const bottom = obstacle.bottom;
    const hit = { time: dt, x: null, y: null };

    function checkFace(axis, direction, coordinate, min, max) {
        if (velocity[axis] * direction <= 0) {
            return;
        }
        const time = (coordinate - movingPos[axis]) / velocity[axis];
        if (time < 0 || time > hit.time) {
            return;
        }
        const otherAxis = axis === "x" ? "y" : "x";
        const otherPosition = movingPos[otherAxis] + velocity[otherAxis] * time;
        if (otherPosition < min || otherPosition > max) {
            return;
        }
        if (time < hit.time) {
            hit.x = null;
            hit.y = null;
        }
        hit.time = time;
        hit[axis] = coordinate;
    }

    checkFace("x", 1, left, top, bottom);
    checkFace("x", -1, right, top, bottom);
    checkFace("y", 1, top, left, right);
    checkFace("y", -1, bottom, left, right);

    return hit.x === null && hit.y === null ? null : hit;
}

function moveBall(dt) {
    while (dt > 0) {
        // Evitar activar el getter repetidamente
        const ballHitbox = BALL.hitbox;
        let hitTime = dt;
        let hitX = null;
        let hitY = null;
        let contacts = [];

        for (const collider of colliders) {
            const hit = getCollision(ballHitbox, BALL.vel, collider.hitbox, hitTime);
            if (hit === null) {
                continue;
            }
            if (hit.time < hitTime) {
                hitX = null;
                hitY = null;
                contacts = [];
            }
            hitTime = hit.time;
            hitX = hit.x ?? hitX;
            hitY = hit.y ?? hitY;
            contacts.push({ collider, hit });
        }

        BALL.move(hitTime);
        dt -= hitTime;

        if (contacts.length === 0) {
            break;
        }
        // Ajustar la posición al punto de contacto para evitar errores de coma flotante
        if (hitX !== null) {
            BALL.pos.x = hitX + BALL.size.w / 2;
        }
        if (hitY !== null) {
            BALL.pos.y = hitY + BALL.size.h / 2;
        }

        BALL.onCollide({ x: hitX !== null, y: hitY !== null });
        for (const { collider, hit } of contacts) {
            collider.onCollide?.({ x: hit.x !== null, y: hit.y !== null });
        }
    }
}
