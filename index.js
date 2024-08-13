const pet = {
    name: "Minou",
    species: "cat",
    happiness: "50",
    status: "fed", 


// console.log(pet.name);
// console.log(pet.species);
// console.log(pet.happiness);
 
 feedMinou: function() {
    this.console.log(`${this.name} has been fed!`);
    this.happiness+=10;
 },
 status: function(){
    console.log(`Pet Status..${this.name}, happiness: ${this.status},`)
 }
} 
console.log(`${pet.name} is ${pet.happiness}`);
pet.status();






// great js object examples https://www.w3schools.com/js/js_objects.asp