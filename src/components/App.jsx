import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

let createEntries = (emoji) => {
  return (
    <Entry
      id={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
};

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntries)}</dl>
    </div>
  );
}

export default App;
