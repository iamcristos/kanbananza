import React from "react";
// import List from "./List";
import ListContainer from "../containers/ListContainer";

const Lists = ({ lists }) => {
  // console.log(lists);
  return (
    <section className="Lists">
      {lists.map(listId => (
        // <List />
        <ListContainer listId={listId} />
      ))}
    </section>
  );
};

export default Lists;
