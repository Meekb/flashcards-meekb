const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Game = require('../src/Game');

describe('Game', function() {

  let card1, card2, card3, newDeck, newRound, newGame;

  beforeEach(function() {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'What prototype method returns an array of the same length with modification?', ['sort', 'map', 'reduce'], 'map');
    card3 = new Card(3, 'How many arguments does the reduce method take?', ['1', '2', '3'], '2');
    newDeck = new Deck([card1, card2, card3]);
    newGame = new Game();
  });

it('should be an instance of Game', function() {
  expect(newGame).to.be.an.instanceof(Game);
});









});
