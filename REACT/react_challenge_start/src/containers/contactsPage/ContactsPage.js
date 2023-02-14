import React, { useEffect, useState } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";
export const ContactsPage = (props) => {
  const contacts = props.data;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const contactsNames = contacts.map((d) => d.name);
  console.log(contactsNames);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      name,
      phone,
      email,
    };
    if (!contactsNames.includes(name)) {
      props.onCreate(newContact);
    } else {
      alert(" O contato já existe !");
    }

    setEmail("");
    setName("");
    setPhone("");
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
      </section>

      <ContactForm
        handleForm={handleSubmit}
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
      ></ContactForm>

      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
      <TileList data={contacts}></TileList>
    </div>
  );
};
