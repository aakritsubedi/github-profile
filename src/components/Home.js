import React,  { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import ReactTypingEffect from "react-typing-effect";

import SocialIcon from "components/SocialIcon";
import { FaMailBulk, FaMapMarkerAlt } from "react-icons/fa";

import { GITHUB_PATH } from 'constants/routes';
import { myInfo, whoAmI, techStack, socialMedia, myGithub } from "constants/myInfo";

import "assets/css/profile.css";


function Home() {
  let history = useHistory();
  let changePage = timeInMs => {
    setTimeout(() => {
      history.push({
         pathname: GITHUB_PATH + myGithub
      });
    }, timeInMs)
  }
  
  useEffect(() => {
    changePage(15000);
  });

  return (
    <div className="profile-wrapper">
      <h1 className="my-name">
        {myInfo.firstName} {myInfo.lastName}
      </h1>
      <span className="title">
        I am
        <ReactTypingEffect
          typingDelay="500"
          text={whoAmI}
          className="typer"
        />
      </span>
      <div className="extra-info">
        <span>
          <FaMailBulk /> <a href={`mailto:` + myInfo.email}> {myInfo.email}</a>
        </span>
        <span>
          <FaMapMarkerAlt />
          {myInfo.address}
        </span>
      </div>
      <ul className="tech-stack">
        {techStack.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      <div className="profile-social-icon">
        <ul>
          {socialMedia.map((social, index) => (
            <SocialIcon title={social.title} link={social.link} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
