import React, { Component, useCallback, useEffect, useState } from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const [today, setToday] = useState();
  const contactsNames = contacts.map((d) => d.name);
  useEffect(() => {
    setToday(getTodayString());
  }, []);

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    console.log(`${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`);
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleContact = (e) => {
    setContact(e.target.value);
  };
  const handleTime = (e) => {
    setTime(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        name="input"
        value={title}
        onChange={handleTitle}
      />
      <input
        onChange={handleDate}
        type="date"
        id="appdate"
        min={today}
        name="appdate"
        value={date}
      />
      <input
        onChange={handleTime}
        value={time}
        type="time"
        id="apptime"
        name="apptime"
      />
      <ContactPicker
        handleContact={handleContact}
        contacts={contactsNames}
      ></ContactPicker>

      <input type="submit" name="input" value="Add appointment" />
    </form>
  );
};
