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
    this.gameCards = prototypeQuestions.map(({id, question, answers, correctAns}) => {
      return new Card(id, question, answers, correctAnswer);
    });
    this.deck = new Deck(this.gameCards);
    this.currentRound = new Round(this.deck);
    this.printMessage(this.deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

}

module.exports = Game;
