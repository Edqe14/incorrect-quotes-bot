import one from './one';
import two from './two';
import three from './three';
import four from './four';
import five from './five';
import six from './six';

declare interface Texts {
  one: string[];
  two: string[];
  three: string[];
  four: string[];
  five: string[];
  six: string[];
  keys: string[];
  characters: string[];
  uppercased: string[];
}

const texts: Texts = {
  one,
  two,
  three,
  four,
  five,
  six,
  keys: null,
  characters: ['A', 'B', 'C', 'D', 'E', 'F'],
  uppercased: ['G', 'H', 'I', 'J', 'K', 'L'],
};
export const keys = Object.keys(texts);
texts.keys = keys;

export default texts;
