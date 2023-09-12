import React from "react";
import { workheaderData } from "../../utils/Dummy";
import { wordData } from "./data";

function WorkHeader({ selected, setSelected }) {
  const { title, subtitle } = wordData;
  return (
    <section className="flex flex-col">
      <div
        className="text-center my-[50px]"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <p className="font-bold text-cyan-800 text-lg px-0">{title}</p>
        <p className="font-bold text-cyan-950 lg:w-[70%] lg:leading-[3rem] font-serif  text-lg lg:text-4xl my-5 px-0 mx-auto">
          {subtitle}
        </p>
      </div>
      <div className="flex mt-5 " data-aos="fade-right" data-aos-delay="500">
        {workheaderData.map((item, index) => (
          <button
            key={index}
            className={
              selected === item.name
                ? "mx-4 text-cyan-900 font-bold underline decoration-double decoration-2"
                : "mx-4 text-cyan-600"
            }
            onClick={() => setSelected(item.name)}
          >
            {item.name}
          </button>
        ))}
      </div>
    </section>
  );
}

export default WorkHeader;
