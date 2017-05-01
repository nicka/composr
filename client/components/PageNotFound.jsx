import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () =>
  <div>
    <h1>Page not found</h1>
    <p>
      <Link replace to="/">Back to announcement</Link>
    </p>
  </div>;

export default PageNotFound;
