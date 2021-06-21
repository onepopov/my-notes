import React from "react";

import "./index.scss";
import ListNotes from "./components/SiteBar";
import Content from "./components/Content";

function MyNotes() {

  return (
    <div className="container">
      <ListNotes />
      <Content />
    </div>
  );
}

export default MyNotes;
