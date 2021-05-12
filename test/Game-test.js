const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Game = require('../src/Game');


describe('Game', function() {

  let card1, card2, card3, newDeck, newGame;

  beforeEach(function() {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'What prototype method returns an array of the same length with modification?', ['sort', 'map', 'reduce'], 'map');
    card3 = new Card(3, 'How many arguments does the reduce method take?', ['1', '2', '3'], '2');
    // card4 = new Card(4, 'How much wood could a woodchuck chuck if a woodchuck could chuck wood?', ['2 piles', '5 piles', '10 piles'], '10 piles');
    // card5 = new Card(5, 'What differene does it make?', ['none', 'a little', 'HUGE!'], 'a little');
    // card6 = new Card(6, 'What is the first letter of the English Alphabet?', ['A', '16', 'Z'], 'A');
    newDeck = new Deck([card1, card2, card3]);
    newGame = new Game();
  });

it('should be an instance of Game', function() {
  expect(newGame).to.be.an.instanceof(Game);
});

it('should have a deck property which will be an empty array', function() {
  expect(newGame.deck).to.be.an('array');
});

it('should keep track of the current Round', function() {
  expect(newGame.currentRound).to.be.an('object');
});

it.skip('should start up the Game', function() {
  newGame.start(newDeck);
  expect(newGame.currentRound['deck'].length).to.equal(30);
});

it.skip('should print a welcome message at the start of the Game', function() {
  newGame.start(newDeck);
  expect(newGame.printMessage).to.be.string;
});


});
