// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from "./Vehicle.js"
import Motorbike from "./Motorbike.js"
import Car from "./Car.js"
import Wheel from "./Wheel.js"
import AbleToTow from "../interfaces/AbleToTow.js"

class Truck extends Vehicle implements AbleToTow {
	// Declare properties of the Truck class
	vin: string
	color: string
	make: string
	model: string
	year: number
	weight: number
	topSpeed: number
	wheels: Wheel[]
	towingCapacity: number

	// Constructor for the Truck class
	constructor(
		vin: string,
		color: string,
		make: string,
		model: string,
		year: number,
		weight: number,
		topSpeed: number,
		wheels: Wheel[],
		towingCapacity: number,
	) {
		// Call the constructor of the parent class, Vehicle
		super()

		// Initialize properties of the Truck class
		this.vin = vin
		this.color = color
		this.make = make
		this.model = model
		this.year = year
		this.weight = weight
		this.topSpeed = topSpeed
        this.towingCapacity = towingCapacity
		// Check if the wheels array has 4 elements
		// If not, create 4 new Wheel objects
		// Otherwise, use the provided wheels array
		if (wheels.length !== 4) {
			this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()]
		} else {
			this.wheels = wheels
		}
	}

	// Override the printDetails method from the Vehicle class
	override printDetails(): void {
		// Call the printDetails method of the parent class, Vehicle
		super.printDetails()

		// Print details of the Truck class
		console.log(`VIN: ${this.vin}`)
		console.log(`Color: ${this.color}`)
		console.log(`Make: ${this.make}`)
		console.log(`Model: ${this.model}`)
		console.log(`Year: ${this.year}`)
		console.log(`Weight: ${this.weight} lbs`)
		console.log(`Top Speed: ${this.topSpeed} mph`)
		console.log(`Towing Capacity: ${this.towingCapacity} lbs`)

		// Print details of the wheels
		console.log(
			`Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
		)
		console.log(
			`Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
		)
		console.log(
			`Wheel 3: ${this.wheels[2].getDiameter} inch with a ${this.wheels[2].getTireBrand} tire`
		)
		console.log(
			`Wheel 4: ${this.wheels[3].getDiameter} inch with a ${this.wheels[3].getTireBrand} tire`
		)
	}

	tow(vehicle: Truck | Motorbike | Car): void {
        // only accept valid vehicles
        if (!vehicle.make && !vehicle.model) {
            console.log('Please pass in a valid vehicle')
            return
        }
        const make = vehicle.make
        const model = vehicle.model

        if (vehicle.weight <= this.towingCapacity) {
            // log that the truck is towing the specific vehicle
            console.log(`The ${this.make} ${this.model} is towing the ${make} ${model}`)
        } else {
            // let the user know the vehicle's weight exceeds the towing capacity of the selected truck
            console.log(`The ${make} ${model} is too heavy to be towed by the truck. Select a vehicle that is less than the trucks towing capacity of ${this.towingCapacity}`)
        }
	}
}

// Export the Truck class as the default export
export default Truck
