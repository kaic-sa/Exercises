import React from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import { useState } from "react";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([
    {
      name: "teste1",
      phone: 9876543214888,
      email: "asd@asd.com",
    },
  ]);
  const [appointments, setAppointments] = useState([
    {
      title: "Jantar",
      contact: "Joana",
      date: "25 de fevereiro",
      time: "19 Horas",
    },
  ]);

  function createContact(obj) {
    setContacts((prevState) => [...prevState, obj]);
    console.log(contacts);
  }

  function createAppointment(obj) {
    setAppointments((prevState) => [...prevState, obj]);
  }

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            {/* Add props to ContactsPage */}
            <ContactsPage data={contacts} onCreate={createContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage
              appointments={appointments}
              contactInfo={contacts}
              createAppointment={createAppointment}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
