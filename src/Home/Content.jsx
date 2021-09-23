import React from "react";
import BestAuthor from "./BestAuthor";
import BestSeller from "./BestSeller";
import Initial from "./Initial";
import Popular from "./Popular";

function Content() {
  return (
    <div>
      <Initial />
      <BestSeller />
      <BestAuthor />
      <Popular />
    </div>
  );
}

export default Content;
