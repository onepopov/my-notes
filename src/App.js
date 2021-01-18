import React from "react";

import "./index.scss";
import ListNotes from "./components/ListNotes";
import Content from "./components/Content";

function App() {

  return (
    <div className="container">
      <ListNotes />
      <Content />
    </div>
  );
}

export default App;
