import React from 'react';

import { Link } from 'react-router-dom';

const logo = (props) => {
  const style = props.altVal === "eduvedaLogoHeader" ? {height: "80px",width: "156px"} : {};
  return (
    <div className={props.id}>
      <Link to='/'>
      <img src={props.logoPath} alt={props.altVal}  style={style}/>
      </Link>
    </div>
  );
}

export default logo;
