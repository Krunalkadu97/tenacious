import React, { useState } from "react";
import { aboutData } from "./data";
import Lottie from "lottie-react";
import contact from "../../assets/animation/contact.json";
import about from "../../assets/animation/about.json";

const Items = ({ onClick, selected, title }) => {
  return (
    <p
      onClick={onClick}
      className={
        selected === title
          ? "font-bold text-xl lg:text-4xl text-cyan-950 my-2"
          : "text-xl my-2 text-cyan-600"
      }
    >
      {title}
    </p>
  );
};
const AboutHeader = () => {
  const [selected, setSelected] = useState("Vision");
  const {
    title,
    subtitle,
    image1,
    image2,
    whosubtitle,
    whotitle,
    whatsubtitle,
    whattitle,
  } = aboutData;

  return (
    <section className="flex flex-col p-6 m-5">
      <div
        className="mx-auto text-center py-[50px]"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <p className="font-bold text-lg px-0 text-cyan-600">{title}</p>
        <p className="font-bold lg:w-[75%] lg:leading-[3.5rem] text-cyan-950 font-serif  text-xl lg:text-4xl my-5 px-0 mx-auto">
          {subtitle}
        </p>
      </div>
      <div
        class="flex flex-col lg:flex-row items-center my-[50px]"
        data-aos="fade-right"
        data-aos-delay="600"
      >
        <div className="lg:w-[600px] content-center items-center">
          {/* <img src={image1} className="h-80 self-center" alt="" /> */}
          <Lottie animationData={about} loop={true} />
        </div>
        <div class="lg:max-w-[60%] lg:px-5 mt-[50px]">
          <p className="font-bold font-serif  text-cyan-950 text-xl lg:text-4xl pb-8">
            {whotitle}
          </p>
          <p className="font-serif text-slate-600 leading-[2rem] text-xl ">
            {whosubtitle}
          </p>
        </div>
      </div>
      <div
        class="flex flex-col lg:flex-row items-center my-[50px]"
        data-aos="fade-right"
        data-aos-delay="800"
      >
        <div class="lg:max-w-[60%]">
          <p className="font-bold font-serif text-cyan-950 text-xl lg:text-4xl pb-6">
            {whattitle}
          </p>
          <p className="font-serif leading-[1.8rem] text-slate-600 text-xl">
            {" "}
            {whatsubtitle}
          </p>
        </div>
        <div className="text-center justify-center">
          <div className="h-[30vh] content-center items-center">
            {/* <img src={image2} className="h-80 self-center" alt="" /> */}
            <Lottie animationData={contact} loop={true} />
          </div>
        </div>
      </div>
      <div
        class="flex flex-col lg:flex-row  my-[50px]"
        data-aos="fade-left"
        data-aos-delay="1000"
      >
        <div className="flex  flex-row lg:flex-col gap-3 lg:max-w-[20%] lg:mr-6 text-center items-center">
          <Items
            title={"Vision"}
            onClick={() => {
              setSelected("Vision");
            }}
            selected={selected}
          />

          <Items
            title={"Mission"}
            onClick={() => {
              setSelected("Mission");
            }}
            selected={selected}
          />
          <Items
            title={"Values"}
            onClick={() => {
              setSelected("Values");
            }}
            selected={selected}
          />
        </div>
        <div class="lg:max-w-[50%] lg:mr-6 mx-auto text-start mt-6 ">
          {/* {visionCont()} */}
          <p className="font-serif text-xl lg:text-3xl lg:leading-[2.6rem] text-center">
            {aboutData[selected]}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;
