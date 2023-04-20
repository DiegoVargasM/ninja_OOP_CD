class Ninja {

	constructor(nombre, salud) {
		this.nombre = nombre;
		this.salud = salud;
		this.velocidad = 3;
		this.fuerza = 3;
	}
	sayName() {
		console.log(`Este ninja es llamado ${this.nombre}`)
	}
	showStats() {
		console.log(`Ninja stats:\nNombre: ${this.nombre}\nFuerza: ${this.fuerza}\nVelocidad: ${this.velocidad}\nSalud: ${this.salud}`)
	}
	drinkSake() {
		this.salud += 10;
	}
}

class Sensei extends Ninja {
	constructor(nombre) {
		super(nombre, 200);
		this.velocidad = 10;
		this.fuerza = 10;
		this.sabiduria = 10;
	}
	speakWisdom() {
		this.drinkSake();
		console.log(`Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.`)
	}
	/* drinkSake() {
		this.velocidad -= 3;
	} */
}


// ejemplo de salida
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"



