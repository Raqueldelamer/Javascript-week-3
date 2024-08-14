console.log("Factory Function with Pets");
function createPet(nameInput, ageInput, energyInput) {
  let pet= {
    name: nameInput,
    age: ageInput,
    energy: energyInput,
    haveABirthday: function() {
      console.log(`Happy Birthday ${this.name}`)
      this.age += 1;
    },
    status: function() {
      console.log(`Name: ${this.name} Age: ${this.age} Energy: ${this.energy}`)
    }
  }
  console.log("Created a pet...")
  pet.status()
  return pet;
}

let pet1 = createPet("Minou", 3, 100);
let pet2 = createPet("Sheba", 2, 100);
let pet3 = createPet("Orpheo", 1, 100);

pet1.haveABirthday();
pet2.haveABirthday();
pet3.haveABirthday();
pet1.status();
pet2.status();
pet3.status();