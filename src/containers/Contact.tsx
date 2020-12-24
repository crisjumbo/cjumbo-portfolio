/*
 ██████╗ ██████╗ ███╗   ██╗████████╗ █████╗  ██████╗████████╗
██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██╔════╝╚══██╔══╝
██║     ██║   ██║██╔██╗ ██║   ██║   ███████║██║        ██║   
██║     ██║   ██║██║╚██╗██║   ██║   ██╔══██║██║        ██║   
╚██████╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║╚██████╗   ██║   
 ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝   ╚═╝   
*/
import React, { useState } from 'react';
import {
  SMain,
  SFormBox,
  SNavBox,
  STextarea,
  SSubmit,
  SInputBox,
  SInput,
  SUnderLine,
} from '../assets/styled/containers/Contact';

//-- Component Contact
const Contact: React.FC = () => {
  //-- Variables & hooks
  const [values, setValues] = useState({
    name: '',
    email: '',
    text: '',
  });
  //-- Functions & handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    setValues({
      ...values,
      [`${name}`]: `${value}`,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('You submitted me');
  };
  //-- Render of the component Contact
  return (
    <SMain>
      <h2>{'Lets keep in touch'}</h2>
      <SFormBox onSubmit={handleSubmit}>
        <SNavBox>
          <SInputBox>
            <SInput name="name" type="text" onChange={handleChange} value={values.name} placeholder="name" />
            <SUnderLine />
          </SInputBox>
          <SInputBox className="email">
            <SInput name="email" type="email" onChange={handleChange} value={values.email} placeholder="email" />
            <SUnderLine />
          </SInputBox>
          <SInputBox>
            <SInput name="text" type="text" onChange={handleChange} value={values.text} placeholder="matter" />
            <SUnderLine />
          </SInputBox>
        </SNavBox>
        <STextarea placeholder="Message..."></STextarea>
        <SSubmit type="submit">Send</SSubmit>
      </SFormBox>
    </SMain>
  );
};

export default Contact;
