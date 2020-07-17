import React from 'react';
import { Link } from 'react-router-dom';
import { GoStar, GoRepoForked } from 'react-icons/go';

import { REPO_PATH } from 'constants/routes';

import 'assets/css/myGithub.css';

function MyGithub(props) {
  let { repo, username } =  props;

  return (
    <>
     <div className='github-card clearfix'>
        <div className='github-card-body'>
          <Link to={{
            pathname: `${REPO_PATH}${username}/${repo.name}`
          }}>
            <span className='github-card-title'>{ repo.name }</span>
          </Link>
          <p className='github-card-desc'>
            {repo.description ? repo.description.substring(0, 250) : ''}
            {repo.description ? '...' : ''}
          </p>
        </div>
        <div className='github-star'>
          <span>{ repo.stargazers_count } <GoStar/> </span>
          <span>{ repo.forks_count } <GoRepoForked/> </span>
          <span className='star-lang'>{repo.language || ''}</span>
        </div>
     </div>
    </>
  );
}

export default MyGithub;
