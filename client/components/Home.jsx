import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>
  <div>
    <h1>We{'\''}ve been acquired by BandLab!</h1>
    <p>
      <a
        href="https://blog.bandlab.com/bandlab-welcomes-composr"
        target="_blank"
        rel="noopener noreferrer"
      >Read the announcement</a> – July 7, 2016
    </p>
    <p>
      <Link replace to="/faq">FAQ</Link>
    </p>
  </div>;

export default Home;
