import React,  { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { HOME_PATH } from 'constants/routes';
import { myInfo } from 'constants/myInfo';

import 'assets/css/main.css';
import youtubeLogo from 'assets/images/youtube-logo.png';

function Main() {
  let history = useHistory();
  let changePage = timeInMs => {
    setTimeout(() => {
      history.push({
        pathname: HOME_PATH + myInfo.channelId
      });
    }, timeInMs)
  }
  
  useEffect(() => {
    changePage(5000);
  });

  return (
    <>
      <div className='main-wrapper'>
        <img src={youtubeLogo} alt='youtube-logo' className='main-yt-logo'/>
        <h1 className='main-username'>{myInfo.firstName} {myInfo.lastName}</h1>
      </div>
    </>
  );
}

export default Main;
