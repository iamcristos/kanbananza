import React from "react";

import Users from "./Users";
import CreateList from "./CreateList";
// import Lists from './Lists';
import ListsContainer from "../containers/ListContainers";

const Application = () => {
  return (
    <main className="Application">
      <Users />
      <section>
        <CreateList />
        {/* <Lists /> */}
        <ListsContainer />
      </section>
    </main>
  );
};

export default Application;
