import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from './../../hoc/Wrapper';

const langBar = (props) => {
  return (
    <Wrapper>

      <div className="log_chat_area d-flex align-items-center">
        <Link to= "" onClick={props.langChange} className="login popup-with-form">
          {props.langName}
        </Link>
        <span className="login popup-with-form">
          Hi{" "}
          {props.user.name !== undefined
            ? props.user.name
            : "Guest"}
            </span>
      </div>

    </Wrapper>
  )
}

export default langBar;
