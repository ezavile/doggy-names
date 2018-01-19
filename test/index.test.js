var expect = require('chai').expect;
var doggyNamesJSON = require('../src/doggy-names.json');
var doggyNames = require('../src');

describe('doggy-names', function() {
  it('should get all the names', function() {
    expect(doggyNamesJSON).to.have.lengthOf(doggyNames.all().length);
  });
  it('should get a random name', function() {
    expect(doggyNamesJSON).to.include(doggyNames.random());
  });
  it('should get ordered names', function() {
    expect(doggyNamesJSON.sort()).to.have.ordered.members(doggyNames.sort());
  });
});
