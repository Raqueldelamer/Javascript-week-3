const pet = {
    name: "Minou",
    species: "cat",
    happiness: "50",


 "petPlay": function() {
    console.log(`Pet name: ${this.name}, Species: ${this.species}, Happiness: ${this.happiness}`);
    console.log(`this.happiness+=10`);
 },

 "petFeed": function(){
    console.log(`Pet Status..`)
    
 },
 "petStatus": function(){

   }
} 
//console.log(`${pet.name} is ${pet.happiness}`);
//pet.fed();
//pet.happy();
//pet.fed();
//pet.happy();

// function add(happiness, status) {
 //   return happiness+status;
// }
console.log(pet.petPlay());
console.log(pet.name);
console.log(pet.species);
console.log(pet.happiness);





// great js object examples https://www.w3schools.com/js/js_objects.asp