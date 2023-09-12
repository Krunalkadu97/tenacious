import React from "react";
import { Services } from "../../utils/Dummy";
import { contactData } from "./data";

const CustomInput = ({ title, type, onChange, value }) => {
  return (
    <div className="w-full mt-2">
      <label
        htmlFor="first-name"
        className="block text-sm font-semibold leading-6 text-cyan-800"
      >
        {title}
      </label>
      <div className="mt-2.5">
        <input
          type={type ? type : "text"}
          name="first-name"
          id="first-name"
          autocomplete="given-name"
          className="block w-full border-b-2 px-3 py-2 text-cyan-700 shadow-sm placeholder:text-gray-400 focus:outline-none focus:border-b-2 focus:border-cyan-700 sm:text-sm sm:leading-6"
          onChange={onChange}
          value={value}
          required
        />
      </div>
    </div>
  );
};
const CustomTextArea = ({ title, onChange, value }) => {
  return (
    <div className="sm:col-span-2 mt-2">
      <label
        htmlFor="message"
        className="block text-sm font-semibold leading-6 text-cyan-800"
      >
        {title}
      </label>
      <div className="mt-2.5">
        <textarea
          name="message"
          id="message"
          rows="4"
          className="block w-full rounded-md border-b-2 px-3 py-2 text-cyan-700 shadow-sm placeholder:text-gray-400 focus:outline-none  focus:border-b-2 focus:border-cyan-700 sm:text-sm sm:leading-6"
          onChange={onChange}
          value={value}
        ></textarea>
      </div>
    </div>
  );
};
const ContactForm = ({
  selecttype,
  setSelectType,
  subtype,
  setSubtype,
  name,
  setName,
  company,
  setCompany,
  email,
  setEmail,
  phone,
  setPhone,
  msg,
  setMsg,
  onSubmit,
}) => {
  const { header } = contactData;
  return (
    <section className="flex flex-col lg:flex-row mx-auto py-[40px]">
      <section
        className="lg:w-[60%] w-[98%]  "
        data-aos="fade-left"
        data-delay-aos="600"
      >
        <div className="grid shadow-xl bg-white rounded-lg">
          <div className="flex items-center justify-start  py-3 px-5">
            <div className="flex">
              <h1 className="text-xl text-cyan-700 font-bold md:text-base">
                Select Service
              </h1>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col justify-start gap-y-3 px-5">
            {header.map((item, index) => (
              <button
                className={
                  selecttype === item.slug
                    ? " rounded-lg border-2 text-cyan-700 border-cyan-700 p-2 mx-2"
                    : "bg-white p-2 mx-2 rounded-lg "
                }
                onClick={() => {
                  setSelectType(item.slug);
                }}
              >
                {" "}
                {item.name}
              </button>
            ))}
          </div>
          {selecttype !== null ? (
            <h1 className="text-lg text-cyan-700 font-bold md:text-base px-5 mt-5">
              Select Domain
            </h1>
          ) : null}
          {selecttype !== null ? (
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-1 gap-y-2 my-2 px-5">
              {Services[selecttype].map((item, index) => (
                <button
                  key={index}
                  className={
                    subtype === item.value
                      ? "bg-white   rounded-lg p-2 mx-2 border-2 text-cyan-800 border-cyan-700"
                      : "bg-white  p-2 mx-2 rounded-lg border-2 border-slate-200"
                  }
                  onClick={() => {
                    setSubtype(item.value);
                  }}
                >
                  {" "}
                  {item.name}
                </button>
              ))}
            </div>
          ) : null}

          <form
            className="mt-10 mb-2 w-100 mx-4 max-w-screen-lg sm:w-90 p-5"
            onSubmit={onSubmit}
          >
            <div className="mb-8 flexc flex-col gap-6">
              <CustomInput
                title={"Your Name"}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <CustomInput
                title={"Compay Name"}
                value={company}
                onChange={(e) => {
                  setCompany(e.target.value);
                }}
              />
              <CustomInput
                title={"Email"}
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <CustomInput
                title={"Phone No"}
                type="phone"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
              <CustomTextArea
                title="Tell us about your project"
                value={msg}
                onChange={(e) => {
                  setMsg(e.target.value);
                }}
              />
            </div>
            <div className="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
              <button className="w-auto bg-cyan-700 hover:bg-cyan-600 rounded-lg shadow-xl font-medium text-white px-4 py-2">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
      <section
        className="lg:w-[30%] h-[300px] w-[98%] my-5 bg-cyan-50 p-6"
        data-aos="fade-right"
        data-delay-aos="600"
      >
        <div className=" p-[5rem]">
          <p className="text-[2rem]">LET'S</p>
          <p className="text-[3.5rem] font-bold text-cyan-700">Talk</p>
        </div>
      </section>
    </section>
  );
};

export default ContactForm;
