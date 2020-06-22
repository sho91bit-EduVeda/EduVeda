import React from 'react';
import { injectIntl } from "react-intl";

import Wrapper from './../../hoc/Wrapper';

const newsletter = (props) => {
  return (
    <Wrapper>
      <div className="subscribe_newsletter">
         <div className="container">
             <div className="row">
                 <div className="col-xl-6 col-lg-6">
                     <div className="newsletter_text">
                         <h3>{props.intl.formatMessage({ id: "Subscribe" })}</h3>
                         <p>{props.intl.formatMessage({ id: "NewsletterContent" })}</p>
                     </div>
                 </div>
                 <div className="col-xl-5 offset-xl-1 col-lg-6">
                     <div className="newsletter_form">
                         <h4>{props.intl.formatMessage({ id: "NewsletterTitle" })}</h4>
                         <form action="#" className="newsletter_form">
                             <input type="text" placeholder="Enter your mail"/>
                             <button type="submit">{props.intl.formatMessage({ id: "SignUp" })}</button>
                         </form>
                     </div>
                 </div>
             </div>
         </div>
     </div>
   </Wrapper>
  );
}

export default injectIntl(newsletter);
