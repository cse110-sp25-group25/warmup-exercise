
import { buildDeck, shuffle, cardToString } from './deck.js';

//const midRng = () => 0.5;

const original  = buildDeck();
const shuffled  = shuffle(original.slice(), {});


// same size
console.assert(shuffled.length === 52, 'Deck should still have 52 cards');

// same multiset of cards
console.assert(
  new Set(shuffled.map(cardToString)).size === 52,
  'No duplicates or missing cards'
);

// order has changed (may fail once in a century)
console.assert(
  original.map(cardToString).join() !== shuffled.map(cardToString).join(),
  'Order should be different after shuffle()'
);

const asString = deck => deck.map(cardToString).join(' ');

console.log('Original deck :', asString(original));
console.log('Shuffled deck :', asString(shuffled));
console.log('✓ shuffle() basic checks passed');
