import React from "react";

export const ContactPicker = (props) => {
  const { contacts, handleContact } = props;
  const contactsInfo = Object.values(contacts);

  return (
    <select
      onChange={handleContact}
      required
      name="contacts"
      id="contact-selected"
    >
      <option key="default" value="">
        --Please choose a contact--
      </option>
      {contactsInfo.map((element) => {
        return (
          <option key={element} value={element}>
            {element}
          </option>
        );
      })}
    </select>
  );
};
