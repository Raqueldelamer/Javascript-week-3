console.log("Factory Function with Pets");
function createPet(nameInput, ageInput, energyInput) {
  let pet= {
    name: nameInput,
    age: ageInput,
    energy: energyInput,
    addEnergy: function() {
      this.energy += 20;
      console.log(`Name: ${this.name} Age: ${this.age} Energy: ${this.energy}`)
      console.log(`After eating, ${this.name} has the energy level ${this.energy}!`)
    },
    status: function() {
      //console.log(`Name: ${this.name} Age: ${this.age} Energy: ${this.energy}`)
      console.log(`Holy bazuka! ${this.name} has energy level ${this.energy}!`)
      
    }
  }
  pet.status()
  return pet;
}

let pet1 = createPet("Minou", 3, 100);
let pet2 = createPet("Sheba", 2, 100);
let pet3 = createPet("Orpheo", 1, 100);

pet1.addEnergy();
pet1.status();
pet2.addEnergy();
pet2.status();
pet3.addEnergy();
pet3.status();


