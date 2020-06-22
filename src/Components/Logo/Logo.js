import React from 'react';

import { Link } from 'react-router-dom';

const logo = (props) => {
  return (
    <div className={props.id}>
      <Link to='#'>
      <img src={props.logoPath} alt={props.altVal} />
      </Link>
    </div>
  );
}

export default logo;
