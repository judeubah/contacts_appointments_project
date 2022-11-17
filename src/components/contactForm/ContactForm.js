import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  const inputChange = ({target})=>{
    const functions ={
      Name: setName,
      Phone: setPhone,
      Email: setEmail
    }  
    const func = functions[target.name]
    func(target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='name' value={name} name='Name' placeholder="name" onChange={inputChange}/>
      <input type='tel' value={phone} name='Phone' placeholder="phone number" onChange={inputChange} />
      <input type='email' value={email} name='Email' placeholder="email" onChange={inputChange} />
      <input type='submit'  name='submit' />
    </form>
  );
};
