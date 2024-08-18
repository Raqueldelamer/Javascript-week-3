// Practice Example

let kid1 = {
    name: "Alice",
    age: 7,
    allowedToHaveSugar: false,
    haveAParty() {
      console.log(`${this.name} brought cake to school for a party.`);
    }
  }
  let kid2 = {
    name: "Bob",
    age: 7,
    allowedToHaveSugar: true,
    haveAParty: function() {
      console.log(`${this.name} brought cake to school for a party.`);
    }
  }
  let firstGrade = [];
  firstGrade.push(kid1)
  firstGrade.push(kid2)

  for(let i=0; i<firstGrade.length; i++) {
    if(firstGrade[i].allowedToHaveSugar === true) {
    firstGrade[i].haveAParty();
} else {
    console.log(`No birthday party for kid that can't have sugar.`);
}
}
