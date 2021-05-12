const Turn = require('./Turn');

class Round {
  constructor(roundCards = []) {
    this.deck = roundCards.cards;
    this.currentCard = this.deck[0];
    this.turnCounter = 0;
    this.incorrect = [];
    this.percentCorrect = 0
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    let thisTurn = new Turn(guess, this.currentCard);

    if (!thisTurn.evaluateGuess()) {
      this.incorrect.push(this.currentCard.cardID);
    }
    this.turnCounter++;
    this.currentCard = this.deck[this.turnCounter];
    return thisTurn.giveFeedback();
  }

  calculatePercentCorrect() {
    let totalQs = this.turnCounter;
    let correctAnswers = this.turnCounter - this.incorrect.length;
    return this.percentCorrect = Math.round((correctAnswers/totalQs) * 100);
  }

  endRound() {
    return `** Round over! ** You answered ${this.percentCorrect}% of the questions correctly!`
  }

}




module.exports = Round;
