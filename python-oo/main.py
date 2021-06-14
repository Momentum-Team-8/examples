import random

RANKS = ("A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K")
SUITS = ("Clubs", "Diamonds", "Hearts", "Spades")


class Card:
    def __init__(self, rank, suit):
        self.rank = rank
        self.suit = suit

    def __repr__(self):
        return f"<Card rank={self.rank} suit={self.suit}>"


class Deck:
    def __init__(self):
        self.cards = []
        for rank in RANKS:
            for suit in SUITS:
                self.cards.append(Card(rank, suit))

    def __str__(self):
        return f"<Deck total_cards={len(self.cards)}>"

    def shuffle(self):
        random.shuffle(self.cards)


deck = Deck()
print(deck)
print(deck.cards)  # this shows the string version of the object instance

# Here's the deck before it's shuffled
for card in deck.cards:
    print(card)

# We call the shuffle instance method, which uses shuffle from Python's random module
deck.shuffle()

# This shows a shuffled deck
for card in deck.cards:
    print(card)
