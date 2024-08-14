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







// great js object examples https://www.w3schools.com/js/js_objects.asp