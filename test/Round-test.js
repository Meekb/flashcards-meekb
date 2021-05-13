const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');


describe('Round', function() {

  let card1, card2, card3, newDeck, newRound;

  beforeEach(function() {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'What prototype method returns an array of the same length with modification?', ['sort', 'map', 'reduce'], 'map');
    card3 = new Card(3, 'How many arguments does the reduce method take?', ['1', '2', '3'], '2');
    newDeck = new Deck([card1, card2, card3]);
    newRound = new Round(newDeck);
  });

  it('should be a function', function() {
    expect(newRound).to.be.an('object');
  });

  it('should track the number of turns in a Round, always starting a new Round at 0', function() {
    expect(newRound.turnCounter).to.equal(0);
  });

  it('should return the current card being played', function() {
    const cardReturned = newRound.returnCurrentCard()
    expect(cardReturned).to.equal(card1);
  });

  it('should increase the turn count by 1 with each Turn taken', function() {
    newRound.takeTurn();
    expect(newRound.turnCounter).to.equal(1);

    newRound.takeTurn();
    expect(newRound.turnCounter).to.equal(2);
  });

  it('should store the ID of the card if the user\'s guess evaluates false', function() {
    newRound.takeTurn('array');
    expect(newRound.incorrect).to.eql([1]);

    newRound.takeTurn('map');
    expect(newRound.incorrect).to.eql([1]);

    newRound.takeTurn('JavaScript');
    expect(newRound.incorrect).to.eql([1, 3]);
  });

  it('should rotate the next card into the currentCard position', function() {
    newRound.takeTurn('object');
    expect(newRound.currentCard.cardID).to.equal(2);
  });

  it('should return "Correct!" as the feedback if a correct guess is submitted', function() {
    expect(newRound.takeTurn('object')).to.equal('Correct!');
  });

  it('should return "Incorrect!" as the feedback if a wrong guess is submitted', function() {
    expect(newRound.takeTurn('potato')).to.equal('Incorrect!');
  });

  it('should calculate the percentage of correct answers', function() {
    newRound.takeTurn('array');
    newRound.takeTurn('map');
    newRound.takeTurn('2');
    expect(newRound.calculatePercentCorrect()).to.equal(67);
  });

  it('Should print to the console "** Round over! ** You answered <>% of the questions correctly!"', function() {
    newRound.takeTurn('array');
    newRound.takeTurn('map');
    newRound.takeTurn('potatoes');
    newRound.calculatePercentCorrect();
    expect(newRound.endRound()).to.be.string;
    expect(newRound.endRound()).to.be.equal('** Round over! ** You answered 33% of the questions correctly!')
  });

});
