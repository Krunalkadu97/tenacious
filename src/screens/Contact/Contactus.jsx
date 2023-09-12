import React, { useState } from "react";
import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";
import ContactFooter from "./ContactFooter";

const Contact = () => {
  const [selecttype, setSelectType] = useState(null);
  const [subtype, setSubtype] = useState(null);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  const onSubmit = () => {
    const body = {
      email: email,
      name: name,
      company: company,
      phone: phone,
      msg: msg,
      selecttype: selecttype,
      subtype: subtype,
    };

    console.log("body", JSON.stringify(body));
  };

  return (
    <>
      <main class="container mx-auto h-full hidden-overflow">
        <ContactHeader />
        <ContactForm
          selecttype={selecttype}
          subtype={subtype}
          setSelectType={setSelectType}
          setSubtype={setSubtype}
          name={name}
          setName={setName}
          company={company}
          setCompany={setCompany}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          msg={msg}
          setMsg={setMsg}
          onSubmit={onSubmit}
        />
        <ContactFooter />
      </main>
    </>
  );
};

export default Contact;
