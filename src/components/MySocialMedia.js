import React from "react";

import SocialIcon from "components/SocialIcon";

import { socialMedia } from "constants/myInfo";

import "assets/css/style.css";

function SocialMedia(props) {
  return (
    <div className={props.className}>
      <ul>
        {socialMedia.map((social, index) => (
          <SocialIcon title={social.title} link={social.link} key={index}  />
        ))}
      </ul>
    </div>
  );
}

export default SocialMedia;
