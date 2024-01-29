//DAY 6/366

function howMuchILoveYou(nbPetals) {
    let phrase = {    
      0: "not at all",
      1: "I love you",
      2: "a little",
      3: "a lot",
      4: "passionately",
      5: "madly",
    }
    return phrase[nbPetals%6];
  }


console.log(howMuchILoveYou(6));