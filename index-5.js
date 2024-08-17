
function createPet(nameInput, speciesInput, energyInput) {
    let pet = {
        name: nameInput,
        species: speciesInput,
        energy: energyInput,

        status() {
            console.log(`Pet name: ${this.name}, Species: ${this.species}, Energy: ${this.energy}.`);
        },
        play() {
            this.energy -= 30;
            console.log(`After playing with ${this.name} energy is ${this.energy}.`);
        },
        feed() {
            this.energy += 30;
            console.log(`After feeding ${this.name}, energy level is now ${this.energy}.`);
        }
    }
    //pet.status()
    return pet;
}
let pet1 = createPet("Minou", "Cat", 10);
let pet2 = createPet("Sheba", "Cat", 20);
let pet3 = createPet("Orpheo", "Cat", 90);
let pet4 = createPet("Twinkle", "Cat", 10);

let catKennel = [];
catKennel.push(pet1);
catKennel.push(pet2);
catKennel.push(pet3);
catKennel.push(pet4);
catKennel.forEach(pet => pet.feed());
console.table(catKennel)



for (let i=0; i < catKennel.length; i++) {
    console.log(`${catKennel[i].name} has the energy level of ${catKennel[i].energy} and is indicating that it wants to be fed`)

    if(catKennel[i].energy < 50) {
    
        catKennel[i].feed();

}   else  {
  
    console.log(`But ${catKennel[i].name} has energy level of ${catKennel[i].energy} and doesn't need to feed.`)
}
}


  //for (let i=0; i < catKennel.length; i++)  {
//    console.log(`${catKennel[i].name} has the energy level of ${catKennel[i].energy} and is indicating that it wants to be fed again.`)  
//}
//}
