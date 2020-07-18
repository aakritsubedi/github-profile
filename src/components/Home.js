import React,  { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { FaMailBulk, FaMapMarkerAlt } from "react-icons/fa";

import ReactTypingEffect from "react-typing-effect";

import MySocialMedia from "components/MySocialMedia";

import { GITHUB_PATH } from 'constants/routes';
import { myInfo, whoAmI, techStack, myGithub } from "constants/myInfo";

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
        I am a
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
      <MySocialMedia className='profile-social-icon' />
    </div>
  );
}

export default Home;
