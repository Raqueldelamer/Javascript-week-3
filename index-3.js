 function createPet(nameInput, speciesInput, happinessInput, energyInput) {
    let pet = {
        name: nameInput,
        species: speciesInput,
        happiness: happinessInput,
        energy: energyInput,

        status() {
            console.log(`Pet name: ${this.name}, Species: ${this.species}, Happiness: ${this.happiness}, Energy: ${this.energy}`);
        },
        play() {
            this.energy -= 20;
            this.happiness += 10;
            console.log(`After playing with ${this.name} happiness is ${this.happiness} and energy is ${this.energy},`);
        },
        feed() {
            this.energy += 20;
            this.happiness += 20;
            console.log(`After feeding ${this.name}, energy level is ${this.energy} and happiness level is at ${this.happiness}.`);
        }
    }
    //pet.status()
    return pet;
}
let pet1 = createPet("Minou", "Cat", 100, 100);
let pet2 = createPet("Sheba", "Cat", 100, 100);
let pet3 = createPet("Orpheo", "Cat", 100, 100);

let kennel = [];

kennel.push(pet1);
kennel.push(pet2);
kennel[kennel.length] = pet3
console.log(kennel);
kennel.forEach(pet => pet.play());
console.log(kennel);
kennel[0].play()