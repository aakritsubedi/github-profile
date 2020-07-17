import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';

import * as size from 'constants/iconSize';

import 'assets/css/main.css';

function SocialIcon(props) {
  let getIcon = title => {
    switch(title) {
      case 'facebook':
        return <FaFacebookF size={size.lg}/>
      case 'instagram':
        return <FaInstagram size={size.lg}/>
      case 'youtube':
        return <FaYoutube size={size.lg}/>
      case 'twitter':
        return <FaTwitter size={size.lg}/>
      case 'github':
        return <FaGithub size={size.lg}/> 
      case 'linkedIn':
        return <FaLinkedinIn size={size.lg}/> 
    }
  }

  return (
    <>
      <a  href={props.link} target='_blank' className='social-link'>
        {getIcon(props.title)}
      </a>
    </>
  );
}

export default SocialIcon;
