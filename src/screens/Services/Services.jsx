import React, { useState } from "react";
import ServiceHeader from "./ServiceHeader";
import ServicesList from "./ServicesList";

function Services() {
  const [selected, setSelected] = useState("technology");
  return (
    <main className="container mx-auto h-full hidden-overflow">
      <ServiceHeader selected={selected} setSelected={setSelected} />
      <ServicesList selected={selected} />
    </main>
  );
}

export default Services;
