import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Social = () => {
  return (
    <footer className='social'>
      <a
        href='https://www.instagram.com/ig_liq12/'
        target='_blank'
        rel='noreferrer'
      >
        <i>
          <FaInstagram />
        </i>
      </a>
      <a
        href='https://www.linkedin.com/in/sandeep-pradhan03/'
        target='_blank'
        rel='noreferrer'
      >
        <i>
          <FaLinkedin />
        </i>
      </a>
      <a href='https://github.com/Sandeep5303' target='_blank' rel='noreferrer'>
        <i>
          <FaGithub />
        </i>
      </a>
      <a
        href='mailto:paul.phoenix7285@gmail.com'
        target='_blank'
        rel='noreferrer'
      >
        <i>
          <FaEnvelope />
        </i>
      </a>
    </footer>
  );
};

export default Social;
