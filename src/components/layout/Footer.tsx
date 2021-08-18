import React from 'react';
import { Facebook, Instagram, GitHub } from 'react-feather';

const Footer = () => {
  return (
    <div className="footer">
      <a href="https://www.facebook.com/haido2801" title="https://www.facebook.com/haido2801" target="_blank" rel="noreferrer">
        <Facebook
          className="icon facebook"
          color="#fff"
          size="2rem"
        />
      </a>
      <a href="https://www.instagram.com/haido5881/" title="https://www.instagram.com/haido5881/" target="_blank" rel="noreferrer">
        <Instagram
          className="icon instagram"
          color="#fff"
          size="2rem"
        />
      </a>
      <a href="https://github.com/haidv-2801" title="https://github.com/haidv-2801" target="_blank" rel="noreferrer">
        <GitHub
          className="icon github"
          color="#fff"
          size="2rem"
        />
      </a>
    </div>
  );
};

export default Footer;
