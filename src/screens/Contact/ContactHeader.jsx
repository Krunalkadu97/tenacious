import React from "react";
import { contactData } from "./data";
import Lottie from "lottie-react";
import contact from "../../assets/animation/contact1.json";

function ContactHeader() {
  const { title, heading, subheading } = contactData;
  return (
    <section className="h-[90%] mb-[50px]">
      <div
        className="mx-auto text-center pt-[100px] h-[25%]"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <p className="font-bold lg:leading-[3.5rem] lg:text-4xl text-lg px-0 text-cyan-900">
          {heading}
        </p>
        <p className="font-bold lg:w-[45%] text-lg  text-cyan-700 font-serif   my-5 px-0 mx-auto">
          {subheading}
        </p>
      </div>
      <section className="flex lg:flex-row h-[60%] flex-col items-center justify-between mx-auto">
        <article
          className="lg:w-[50%] w-[100%] flex items-center justify-center  p-6"
          data-aos="fade-right"
          data-delay-aos="600"
        >
          {/* <img
            className=" scale-100  h-[300px] md:transform-none"
            src={image}
            alt=""
          /> */}
          <Lottie animationData={contact} loop={true} />
        </article>
        <article
          className="lg:w-[50%]w-[100%] flex items-center p-6 "
          data-aos="fade-left"
          data-delay-aos="400"
        >
          <div className="gap-y-4">
            <p className="lg:text-5xl text-3xl my-5 font-bold text-cyan-700 hover:text-cyan-800">
              {title.one}
            </p>
            <p className="lg:text-5xl text-3xl my-5 font-bold text-cyan-700 hover:text-cyan-800">
              {title.two}
            </p>
            <p className="lg:text-5xl text-3xl my-5 font-bold text-cyan-700 hover:text-cyan-800">
              {title.three}
            </p>
          </div>
        </article>
      </section>
    </section>
  );
}

export default ContactHeader;
