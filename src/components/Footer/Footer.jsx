import React from 'react';
import {
  FaRegCopyright,
  FaGithub,
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';
import { FooterStyled } from './Footer.styled';

const Footer = () => {
  return (
    <FooterStyled>
      <div className="copyright">
        <FaRegCopyright /> <p>NeverOff</p>
      </div>

      <div className="socialNet">
        <a
          className="footer-link"
          href="https://github.com/alex-neveroff"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          className="footer-link"
          href="https://www.linkedin.com/in/alexandr-neverov"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          className="footer-link"
          href="https://t.me/alex_neveroff"
          target="_blank"
          rel="noreferrer"
        >
          <FaTelegramPlane />
        </a>
      </div>
    </FooterStyled>
  );
};

export default Footer;
