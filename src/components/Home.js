import React from 'react';
import { Link } from 'react-router-dom';
//import Application from './MEpage/Application';

const Home = () => {
  return (
    <div>
      <h1>Degree Certificate Verification and Certificate Download Portal...</h1>
      <br/>Document Verification<br/><br/>
      <h2>To Login click <Link to='/login'>here</Link></h2>
    </div>
  )
}

export default Home;
