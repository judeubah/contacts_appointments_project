import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";
export const ContactsPage = ({ contacts, newContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicateName, setDuplicateName] = useState(false);
  
  useEffect(() => {
    setDuplicateName(false);
    for (let x in contacts) {
      if (name === contacts[x].name) {
        setDuplicateName(true);
      }
    }
  }, [name, contacts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!duplicateName && name && phone && email) {
      newContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contacts</h2>
        <ContactForm
          name={name}
          phone={phone}
          email={email}
          handleSubmit={handleSubmit}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={contacts} />
      </section>
    </div>
  );
};
