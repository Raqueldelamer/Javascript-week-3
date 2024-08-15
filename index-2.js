console.log("Factory Function with Pets");

function createPet(nameInput, speciesInput, energyInput, happinessInput) {
  let pet= {
    name: nameInput,
    species: speciesInput,
    energy: energyInput,
    happiness: happinessInput,
    status() {
      console.log(`Name: ${this.name} Species: ${this.species} Energy: ${this.energy} Happiness: ${this.happiness}`);
     },

    addPlay() {
      this.energy += 20;
      this.happiness += 10;
     
      console.log(`After playing, ${this.name} happy level is ${this.happiness}!`);
    },
    
     addFeed() {
      this.energy += 20;
      this.happiness += 20;
      console.log(`After eating ${this.name}, happiness is now ${this.happiness}, and energy is now ${this.energy}.`);
   }
  }

  pet.status()
  return pet;
}

let pet1 = createPet("Minou", "Cat", 100, 100);
let pet2 = createPet("Sheba", "Cat", 100, 100);
let pet3 = createPet("Orpheo", "Cat", 100, 100);

pet1.addPlay();
pet1.status();
pet1.addFeed();
pet2.addPlay();
pet2.status();
pet2.addFeed();
pet3.addPlay();
pet3.status();
pet3.addFeed();


