import { schema, normalize } from "normalizr";
import defaultState from "../default-state.json";

const user = new schema.Entity("users");
const card = new schema.Entity("cards", { assignedTo: user });
const list = new schema.Entity("lists", {
  cards: [card]
});

// console.log(list, "normalize schema");
const normalizeList = normalize(defaultState.lists, [list]);
const normalizeUser = normalize(defaultState.users, [user]);

// console.log(normalizeList, "user");

export const lists = {
  entities: normalizeList.entities.lists,
  ids: normalizeList.result
};

export const users = {
  entities: normalizeUser.entities.users,
  ids: normalizeUser.result
};

export const cards = {
  entities: normalizeList.entities.cards,
  ids: Object.keys(normalizeList.entities.cards)
};

export default {
  lists,
  cards,
  users
};
