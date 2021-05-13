const data = require('./data');
const util = require('./util');
const prototypeQuestions = data.prototypeData;
const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');

class Game {
  constructor() {
    this.gameCards;
    this.deck = [];
    this.currentRound = {};
  }

  start() {
    this.gameCards =
      prototypeQuestions.map(card => {
        return new Card(card.id, card.question, card.answers, card.correctAnswer);
      });
    this.deck = new Deck(this.gameCards);
    this.currentRound = new Round(this.deck);
    this.printMessage(this.deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  }

  printQuestion(round) {
    util.main(round);
  }

}

module.exports = Game;
