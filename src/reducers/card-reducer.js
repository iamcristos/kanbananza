import {cards as defaultCards} from '../normalized-state';

export default (cards = defaultCards, action) =>{
  console.log(cards, action);
  return cards
}