import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaGithub, FaLinkedinIn, FaGoogle } from 'react-icons/fa';

import 'assets/css/main.css';

function SocialIcon(props) {
  let getIcon = title => {
    switch(title) {
      case 'facebook':
        return <FaFacebookF className='icon'/>
      case 'instagram':
        return <FaInstagram className='icon'/>
      case 'youtube':
        return <FaYoutube className='icon'/>
      case 'twitter':
        return <FaTwitter className='icon'/>
      case 'github':
        return <FaGithub className='icon'/> 
      case 'linkedIn':
        return <FaLinkedinIn className='icon'/> 
      default:
        return <FaGoogle className='icon'/> 
    }
  }

  return (
    <>
      <a  href={props.link} target='_blank' className='social-link' rel="noopener noreferrer">
        {getIcon(props.title)}
      </a>
    </>
  );
}

export default SocialIcon;
