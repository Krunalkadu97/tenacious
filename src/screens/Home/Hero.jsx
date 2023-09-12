import React from "react";
import Header from "./Header";
import { heroData } from "./data";
import Lottie from "lottie-react";
import home from "../../assets/animation/home.json";

const Hero = () => {
  const { title, subbtitle, btnText, image } = heroData;
  return (
    <section className="bg-[url(./assets/img/bg.png)] lg:h-[980px] py-8">
      <Header />
      <div className="container mx-auto h-full relative ">
        <div className="flex flex-col xl:flex-row items-center h-full md:py-24">
          {/**Info tab*/}
          <div className="text-center xl:text-left xl:absolute lg:px-6">
            <h1
              className="h1 xl:max-w-[600px] mb-6  lg:mb-12 font-bold lg:text-6xl text-2xl capitalize text-white"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              {title}
            </h1>
            <p
              className="lead xl:max-w-[380px] mb-6 lg:mb-12 font-normal text-lg text-white"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              {subbtitle}
            </p>
            <button
              className="btn btn-primary mb-8 xl:mb-0 py-4 rounded-lg bg-slate-950 text-white px-5"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              {btnText}
            </button>
          </div>
          {/** image tab*/}
          <div
            className="xl:absolute xl:-right-12 "
            data-aos="fade-up"
            data-aos-delay="700"
          >
            {/* <img
              src={image}
              alt=""
              className="w-[700px] lg:w-[600px] xl:w-[700px] md:w-[500px]"
            /> */}
            <Lottie
              animationData={home}
              loop={true}
              className="w-[700px] lg:w-[600px] xl:w-[700px] md:w-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

/**
 *  <Header />
      <Contaiuners />
      <Bottom />
 */
