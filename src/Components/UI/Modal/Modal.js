import React from 'react';

import './Modal.css';
import Wrapper from '../../../hoc/Wrapper';
import Backdrop from '../Backdrop/Backdrop';

const modal = ( props ) => {
  return (
    <Wrapper>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div
            className="Modal .d-none .d-xl-block"
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Wrapper>
)};

export default modal;
