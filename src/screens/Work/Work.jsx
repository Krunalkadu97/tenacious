import React, { useState } from "react";
import WorkHeader from "./Header";
import WorkSample from "./Sample";

function Work() {
  const [selected, setSelected] = useState("All");

  return (
    <>
      <main class="container mx-auto h-full hidden-overflow">
        <WorkHeader selected={selected} setSelected={setSelected} />
        <WorkSample selected={selected} />
      </main>
    </>
  );
}

export default Work;
