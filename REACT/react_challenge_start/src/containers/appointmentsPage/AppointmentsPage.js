import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";
export const AppointmentsPage = (props) => {
  const { appointments, contactInfo, createAppointment } = props;

  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  /*
  Define state variables for 
  appointment info
  */

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointment = {
      title: title,
      date: date,
      contact: contact,
      time: time,
    };
    props.createAppointment(newAppointment);
    alert("Create");
    setTitle("");
    setDate("");
    setContact("");
    setTime("");
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          title={title}
          setTitle={setTitle}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
          contacts={contactInfo}
          setContact={setContact}
        ></AppointmentForm>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList data={appointments}></TileList>
      </section>
    </div>
  );
};
