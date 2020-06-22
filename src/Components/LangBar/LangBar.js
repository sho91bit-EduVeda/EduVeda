import React from 'react';
import Wrapper from './../../hoc/Wrapper';

const langBar = (props) => {
  return (
    <Wrapper>
      <div className="live_chat_btn">
        <button
          id="lang-btn"
          className="link-button"
          onClick={props.langChange}
        >
          {props.langName}
        </button>
        <span id="lang-btn">
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
