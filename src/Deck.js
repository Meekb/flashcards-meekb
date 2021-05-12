class Deck {
  constructor(cards = []) {
    this.cards = cards;
  }

  countCardsInDeck() {
    return this.cards.length;
  }

}




module.exports = Deck;
