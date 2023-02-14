import React from "react";

export const ContactForm = ({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  handleForm,
}) => {
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <form onSubmit={handleForm}>
      <input
        type="text"
        placeholder="Name"
        name="input"
        value={name}
        onChange={handleName}
      />
      <input
        type="tel"
        placeholder="Phone Number"
        name="input"
        value={phone}
        onChange={handlePhone}
      />
      <input
        type="email"
        placeholder="E-mail"
        name="input"
        value={email}
        onChange={handleEmail}
      />

      <input type="submit" name="input" value="Add contact" />
    </form>
  );
};
