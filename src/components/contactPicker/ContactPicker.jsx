import React from "react";

export const ContactPicker = ({contacts, onChange}) => {
  
  return (
   <select name="contact" onChange={onChange}>
    <option selected="selected" value="none">N/A</option>
    {contacts.map((contact)=>(
      <option key={contact.name}  value={contact.name}>{contact.name}</option>
    ))}
   </select>
  );
};
