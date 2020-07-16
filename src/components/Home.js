import React from 'react';
import { useParams } from 'react-router-dom';

function Home() {
  const { channelId } = useParams();

  return (
    <>
      <h1>Home Page</h1>
      <h2>Your Youtube Id is {channelId}</h2>
    </>
  );
}

export default Home;
