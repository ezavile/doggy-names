var uniqueRandomArray = require('unique-random-array');
var doggyNames = require('./doggy-names.json');

module.exports = {
  all: function() {
    return doggyNames;
  },
  random: uniqueRandomArray(doggyNames),
  sort: function() {
    return doggyNames.sort();
  }
};
