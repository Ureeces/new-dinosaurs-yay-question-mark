const makeDino = function(species, period, diet, extinct) {
  const dino = {};
    dino.species = species;
    dino.period = period;
    dino.carnivore = diet;
    dino.extinct = false;
    
    if(extinct !== undefined) {
      dino.extinct = extinct;
    }

  return dino;
}

const makeSingular = function(dino) {
  const dinoSpecies = dino.species;
  const dinoTime = dino.period;
  const dinoIsACarnivore = dino.carnivore;
  const dinoIsExtinct = dino.extinct;
  
  let newDinoName = "";
  if(dinoSpecies.includes("us")) {
    const index = dinoSpecies.indexOf("us");
    newDinoName = dinoSpecies.substring(0, index);
  } else {
    newDinoName = dinoSpecies;
  }

  const singleDino = makeDino(newDinoName, dinoTime, dinoIsACarnivore, dinoIsExtinct);
  return singleDino
}

const truncateSpecies = function() {
}

const makeExtinct = function() {

}

module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct
}