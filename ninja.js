class Ninja {
    constructor(nombre) {
        this.name = nombre,
        this.salud = 0,
        this.velocidad = 3,
        this.fuerza = 3
    }
    sayName() {
        console.log(this.name)
    }
    showStats() {
        console.log(`Estas son las estadisticas de ${this.name}
        La salud es ${this.salud}
        La velocidad es ${this.velocidad}
        la fuerza es ${this.fuerza}`);
    }
    drinkSake() {
        this.salud += 10;
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.drinkSake();
ninja1.sayName();
ninja1.showStats();