import React from "react";
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
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const inputChange = ({target})=>{
    const {name} = target;
    const functions = {
      title: setTitle,
      date:setDate,
      time:setTime,
      contact: setContact
    }
    const func = functions[name];
    func(target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Title" type="text" name={'title'} value={title} onChange={inputChange} />
      <input type="date" min={getTodayString()} name={'date'} value={date} onChange={inputChange} />
      <input type="time" placeholder="time" name={'time'} value={time} onChange={inputChange} />
      
        <ContactPicker
        name={'contact'}
        value={contact}
        onChange={inputChange}
        contacts={contacts}
        />


      <input type="submit" name={'submit'} value={'submit'}  />
    </form>
  );
};
