import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Moment from "react-moment";

import SocialIcon from "components/SocialIcon";

import repoAPI from "services/repoAPI";

import { GoRepo, GoStar, GoRepoForked, GoEye, GoMarkGithub, GoRepoPush, GoClock, GoTerminal, GoRepoClone, GoLink, GoGitBranch } from "react-icons/go";

import { myInfo, socialMedia } from "constants/myInfo";

import "assets/css/repo.css";

function Repo() {
  const { username, repo } = useParams();
  const [theRepo, setTheRepo] = useState([]);

  useEffect(() => {
    async function repoData() {
      let repository = await repoAPI(username, repo);
      setTheRepo(repository.data);
    }
    repoData();
  }, [username, repo]);

  return (
    <>
      <div className="github-wrapper">
        <h1 className="my-name">
          {myInfo.firstName} {myInfo.lastName}
        </h1>
        <br />
        <span className="github-title">
          <GoRepo /> {username} / {theRepo.name}
        </span>
        <div className="the-repo-card">
          <GoClock /> <Moment format="YYYY/MM/DD">{theRepo.created_at}</Moment>
          <p className="the-repo-desc">{theRepo.description}</p>
          <div className='extra-info'> 
            <ul>
              <li><GoMarkGithub /> / <a href={theRepo.html_url} target="blank">{theRepo.name}</a></li>
              <li><GoRepoPush />  <Moment format="YYYY/MM/DD">{theRepo.pushed_at}</Moment></li>
              <li><GoGitBranch /> {theRepo.default_branch}</li>
              <li><GoTerminal /> git clone {theRepo.ssh_url}</li>
              <li><GoRepoClone /> <a href={theRepo.clone_url} target='blank'>{theRepo.clone_url}</a></li>
              {
                theRepo.homepage ?
                <li><GoLink /> <a href={theRepo.homepage} target='blank'>{theRepo.homepage}</a></li>
                : ''
              }
            </ul>
          </div>
          <br/>
          <div className="the-repo-star">
            <span>
              {theRepo.stargazers_count} <GoStar />
            </span>
            <span>
              {theRepo.forks_count} <GoRepoForked />
            </span>
            <span>
              {theRepo.watchers_count} <GoEye/>
            </span>
            <span className="star-lang">{theRepo.language || ""}</span>
          </div>
        </div>
        <br />
        <div>
          <h6>
            {myInfo.firstName} {myInfo.lastName}
          </h6>
          <ul className="social-icon">
            {socialMedia.map((social, index) => (
              <SocialIcon title={social.title} link={social.link} key={index} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Repo;
