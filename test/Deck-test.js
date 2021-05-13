const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {
  let card1, card2, card3, card4, card5, card6;
  const cards = [card1, card2, card3, card4, card5, card6];
  const newDeck = new Deck(cards);

  beforeEach(function() {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'What prototype method returns an array of the same length with modification?', ['sort', 'map', 'reduce'], 'map');
    card3 = new Card(3, 'How many arguments does the reduce method take?', ['1', '2', '3'], '2');
    card4 = new Card(4, 'How much wood could a woodchuck chuck if a woodchuck could chuck wood?', ['2 piles', '5 piles', '10 piles'], '10 piles');
    card5 = new Card(5, 'What differene does it make?', ['none', 'a little', 'HUGE!'], 'a little');
    card6 = new Card(6, 'What is the first letter of the English Alphabet?', ['A', '16', 'Z'], 'A');
    cards;
    newDeck;
  });

  it('should be a function', function() {
    expect(newDeck).to.be.an.instanceof(Deck);
  });

  it('should be store a whole deck of cards', function() {
    expect(newDeck.cards).to.eql(cards);
  });

  it('should know how many cards are in the deck', function() {
    const cardCount = newDeck.countCards();
    expect(cardCount).to.equal(6);
  });

});
