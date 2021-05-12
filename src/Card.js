class Card {
  constructor(num, question, answers, correctAns) {
    this.cardID = num;
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAns;
  }
}

module.exports = Card;
