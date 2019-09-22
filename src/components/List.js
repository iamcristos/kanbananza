import React from "react";

// import Card from './Card';
import CardContainer from "../containers/CardContainer";
import CreateCard from "./CreateCard";

const List = ({ list = {}, removeList }) => {
  return (
    <article className="List">
      <h2>{list.title}</h2>
      <CreateCard />
      <div>
        {list.cards.map(cardId => (
          // <Card key={cardId} cardId={cardId} listId={list.id} />
          <CardContainer key={cardId} cardId={cardId} />
        ))}
      </div>
    </article>
  );
};

export default List;
