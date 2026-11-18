"use strict";

import { Propietario } from "./Propietario.js";

export class Edificio{
    #calle;
    #numero;
    #codigoPostal;
    #plantas;

    constructor(calle,numero,codigoPostal){
        this.#calle=calle;
        this.#numero=numero;
        this.#codigoPostal=codigoPostal;
        this.#plantas = [];
        console.log(`Creado nuevo edificio en calle: Calle ${this.#calle} Nº: ${this.#numero} CP: ${this.#codigoPostal}`);
    }

    // getters y setters
    get Calle(){
        return this.#calle;
    }
    get Numero(){
        return this.#numero;
    }
    get CodigoPostal(){
        return this.#codigoPostal;
    }

    set Calle(calle){
        this.#calle=calle;
    }
    set Numero(numero){
        this.#numero=numero;
    }
    set CodigoPostal(codigoPostal){
        this.#codigoPostal=codigoPostal;
    }

    agregaPlantasYPuertas(nPlantas,nPuertas){
        for(let i=0;i<nPlantas;i++){
            if(this.#plantas[i]===undefined){
                this.#plantas[i]=new Array(nPuertas).fill(null);
            }else{
                this.#plantas[i].push(new Array(nPuertas).fill(null));
            }
            
        }
    }

    agregaPropietario(planta,puerta,nombre,genero,miembros){
        if(this.#plantas[planta][puerta]!==undefined){
            this.#plantas[planta][puerta]=new Propietario();
            this.#plantas[planta][puerta].Nombre=nombre;
            this.#plantas[planta][puerta].Genero=genero;
            this.#plantas[planta][puerta].Miembros=miembros;
            return true;
        }
        return false;
    }

    imprimePlantas(){
        for(let i=0;i<this.#plantas.length;i++){
            for(let j=0;j<this.#plantas[i].length;j++){
                console.log(`Planta ${i} puerta ${j}: propietario ${this.#plantas[i][j].toString()}`);
            }
        }
    }
}