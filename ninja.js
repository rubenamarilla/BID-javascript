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

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.sabiduria = 10;
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
    }
    speakWisdom() {
        const masSalud = super.drinkSake();
        console.log('"Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."');
    }
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();