import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([])

  const newContact = (name, phone, email)=>{
    setContacts((oldContacts) =>  [{name,phone,email},...oldContacts])
  }

  const newAppointment = (title, contact, date, time)=>{
    setAppointments((oldAppointments)=>  [{title, contact, date, time},...oldAppointments])
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
          <Route path={ROUTES.CONTACTS}>
            {/* Add props to ContactsPage */}
            <ContactsPage
             contacts={contacts}
             newContact={newContact}
             />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage
            contacts={contacts}
            appointments={appointments}
            newAppointment={newAppointment}
             />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
