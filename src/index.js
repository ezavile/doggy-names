var uniqueRandomArray = require('unique-random-array');
var doggyNames = require('./doggy-names.json');

module.exports = {
  all: doggyNames,
  random: uniqueRandomArray(doggyNames),
  sort: doggyNames.sort()
};
