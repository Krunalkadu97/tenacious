import React from "react";
import { workSample } from "../../utils/Dummy";
import bg from "../../assets/img/comp.png";

function WorkSample({ selected }) {
  const data = workSample.filter((item) => {
    if (selected === "All") {
      return item;
    } else {
      if (item.category === selected) {
        return item;
      }
    }
  });

  return (
    <section
      className="mx-auto py-[10px] grid lg:grid-cols-3 sm:grid-cols-1 gap-3 my-5"
      data-aos="fade-left"
      data-aos-delay="800"
    >
      {workSample
        .filter((item) => {
          if (selected === "All") {
            return item;
          } else {
            if (item.category === selected) {
              return item;
            }
          }
        })
        .map((items, index) => {
          return (
            <div
              index={index}
              className="flex flex-col items-center p-8 bg-slate-50 rounded-xl shadow-sm mx-2 hover:bg-slate-100"
            >
              <img src={bg} className="hover:scale-110" alt="" />
              <p className="font-bold text-xl text-cyan-900"> {items.name}</p>
            </div>
          );
        })}
      {data && data.length < 1 ? (
        <div className="flex flex-col p-8 bg-slate-50 min-w-[80%] items-center my-5 rounded-xl">
          {/* <img src={bg} className="hover:scale-110 h-50" alt="" /> */}
          <p className="font-bold text-xl text-center mx-auto py-8">
            {" "}
            Comming Soon
          </p>
        </div>
      ) : null}
    </section>
  );
}

export default WorkSample;
