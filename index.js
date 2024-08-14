const pet = {
    name: "Minou",
    species: "cat",
    happiness: 50,
    addHappiness: function() {
      this.happiness += 10;
    },
   status: function() {
      console.log(`Pet name: ${this.name}, Species: ${this.species}, Happiness: ${this.happiness}`);
      console.log(`${this.name} has played and been fed!`);
      console.log(`${this.name} is at level ${this.happiness} of happiness.`);
   }
} 

pet.status();
pet.addHappiness();
pet.status();
pet.addHappiness();
pet.status();
pet.addHappiness();
pet.status();

//console.log(`${pet.name} is ${pet.happiness}`);
//pet.fed();
//pet.happy();
//pet.fed();
//pet.happy();

// function add(happiness, status) {
 //   return happiness+status;
// }
// console.log(pet.petPlay());
console.log(pet.name);
console.log(pet.species);
console.log(pet.happiness);
// console.log("\nToDo 2: City")
// city.status();
// city.addPop();
// city.status();





// great js object examples https://www.w3schools.com/js/js_objects.asp