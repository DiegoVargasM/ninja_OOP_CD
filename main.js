class Ninja {

	constructor(nombre, salud) {
		this.nombre = nombre;
		this.salud = salud;
		this.velocidad = 3;
		this.fuerza = 3;
	}
	sayName() {
		console.log(`Este ninja es llamado ${this.nombre}-sensei`)
	}
	showStats() {
		console.log(`Ninja stats:\nNombre: ${this.nombre}\nFuerza: ${this.fuerza}\nVelocidad: ${this.velocidad}\nSalud: ${this.salud}`)
	}
	drinkSake() {
		this.salud += 10;
	}
}

const myNinja = new Ninja("Diego", 100)

myNinja.showStats()
myNinja.drinkSake()
myNinja.showStats()

