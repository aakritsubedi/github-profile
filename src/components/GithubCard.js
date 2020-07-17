import React from 'react';

import { GoStar, GoRepoForked } from 'react-icons/go';

import 'assets/css/myGithub.css';

function MyGithub(props) {
  let { repo } =  props;

  return (
    <>
     <div className='github-card clearfix'>
        <div className='github-card-body'>
          <span className='github-card-title'>{ repo.name }</span>
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
