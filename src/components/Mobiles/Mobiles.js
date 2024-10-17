import React from 'react';
import { Link } from 'react-router-dom';
import MobileItems from './MobileItems';

const Mobile = () => {
  return (
    <div>
      <h2>Mobile Section</h2>
      <Link to="/mobiles" style={{ textDecoration: 'underline', cursor: 'pointer' }}>
        Mobiles
      </Link>
          </div>
  );
};

export default Mobile;
