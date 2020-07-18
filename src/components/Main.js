import React,  { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import MySocialMedia from "components/MySocialMedia";

import { HOME_PATH } from 'constants/routes';
import { myInfo } from 'constants/myInfo';

import 'assets/css/main.css';
import myImage from 'assets/images/main-profile.jpg';


function Main() {
  let history = useHistory();
  let changePage = timeInMs => {
    setTimeout(() => {
      history.push({
        pathname: HOME_PATH + myInfo.firstName
      });
    }, timeInMs)
  }
  
  useEffect(() => {
    changePage(5000);
  });

  return (
    <>
      <div className='main-wrapper'>
        <img src={myImage} alt='youtube-logo' className='main-profile-logo'/>
        <h1 className='main-username'>{myInfo.firstName} {myInfo.lastName}</h1>
        <MySocialMedia className='social-icon' />
      </div>
    </>
  );
}

export default Main;
