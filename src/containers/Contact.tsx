import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
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
  //-- Render of the component Contact
  return (
    <SMain>
      <h2>Let&aposs keep in touch</h2>
      <SFormBox>
        <SNavBox>
          <SInputBox>
            <SInput className="input__box" placeholder="name" />
            <SUnderLine />
          </SInputBox>
          <SInputBox>
            <SInput className="input__box" placeholder="email" />
            <SUnderLine />
          </SInputBox>
          <SInputBox>
            <SInput className="input__box" placeholder="matter" />
            <SUnderLine />
          </SInputBox>
        </SNavBox>
        <STextarea className="contact-box__textarea" placeholder="Message..."></STextarea>
        <SSubmit className="button--submit" value="Submit" />
      </SFormBox>
    </SMain>
  );
};

export default Contact;
