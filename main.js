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

const makeSingular = function() {
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