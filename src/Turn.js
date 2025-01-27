class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
    this.currentCard = card;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    if (this.guess === this.currentCard.correctAnswer) {
      return true;
    } else {
      return false;
    }
  }

  giveFeedback() {
    if (this.evaluateGuess()) {
      return 'Correct!';
    } else {
      return 'Incorrect!';
    }
  }

}

module.exports = Turn;
