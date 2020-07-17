import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import githubAPI from "services/githubAPI";

import GithubCard from "components/GithubCard";
import SocialIcon from 'components/SocialIcon';

import { myInfo, socialMedia } from 'constants/myInfo';

import "assets/css/myGithub.css";

function MyGithub() {
  const { username } = useParams();
  const [userRepo, setUserRepo] = useState([]);

  useEffect(() => {
    async function allData() {
      let repo = await githubAPI(username);
      setUserRepo(repo.data);
    }
    allData();
  }, [username]);

  return (
    <>
      <div className="github-wrapper">
        <h1 className="my-name">
          {myInfo.firstName} {myInfo.lastName}
        </h1>
        <p className="my-work">
          "YOU PROBABLY WANT TO LOOK AT MY WORK". That's cool, but sit tight;
          let's break the ice a little.
        </p>
        <br/>
        <span className="github-title">{username} / Popular repositories</span>
        <ul className='clearfix'>
          {userRepo.map((repo, index) => (
            <GithubCard repo={repo} key={index} />
          ))}
        </ul>
        <br/>
        <div>
          <h6>
            {myInfo.firstName} {myInfo.lastName}
          </h6>
          <ul className='social-icon'>
            {socialMedia.map((social, index) => (
              <SocialIcon title={social.title} link={social.link} key={index} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default MyGithub;
