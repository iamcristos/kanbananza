import { lists as defaultList } from "../components/normalize-state";

export default function listReducer(lists = defaultList, action) {
  console.log(lists, action);
  return lists;
}
