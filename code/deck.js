export const SUITS = ['♠', '♥', '♦', '♣'];

export const NUMS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

// Builds deck in set suit & rank order
export function buildDeck() {
  const deck = [];
  for (const suit of SUITS) {
    for (const rank of NUMS) deck.push({ rank, suit });
  }
  return deck;
}

//for testing shuffle function
export function cardToString(card) {
    return `${card.rank}' of '${card.suit}s`;
  }

//When getting new shuffled deck, need to call shuffle on buildDeck()
export function shuffle(deck, {rng = Math.random } = {}) {
  const d = deck
  for (let i = d.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [d[i], d[j]] = [d[j], d[i]];
  }
  return d;
}
