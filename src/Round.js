const Turn = require('./Turn');

class Round {
  constructor(roundCards = []) {
    this.deck = roundCards.cards;
    this.currentCard = this.deck[0];
    this.turnCounter = 0;
    this.incorrect = [];
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
  }

}




module.exports = Round;
