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
  return singleDino;
}

const truncateSpecies = function(dino) {
  const len = dino.species.length;
  let truncatedName = "";

  if(len <= 10) {
    truncatedName = dino.species;
  } else {
    truncatedName = dino.species.substring(0, 7) + "...";
  }

 const dinoTime = dino.period;
 const dinoIsACarnivore = dino.carnivore;
 const dinoIsExtinct = dino.extinct;

  const truncatedDino = makeDino(truncatedName, dinoTime, dinoIsACarnivore, dinoIsExtinct);
  
  return truncatedDino;
}

const makeExtinct = function(dino) {
  const dinoSpecies = dino.species + "...";
  const dinoTime = dino.period;
  const dinoDiet = dino.carnivore;
  
  const extinctDino = makeDino(dinoSpecies, dinoTime, dinoDiet, true);

  return extinctDino;
}

module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct
}