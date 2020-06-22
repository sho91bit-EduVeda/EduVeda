import React from 'react';
import { injectIntl } from "react-intl";
import { Link } from 'react-router-dom';

import Wrapper from './../../hoc/Wrapper';
import Logo from './../Logo/Logo';
import Blog1 from './../../img/latest_blog/1.png';

const blog = (props) => {
  return (
    <Wrapper>
      <div className="col-xl-4 col-md-4">
        <div className="single_latest_blog">
        <Logo altVal={props.blogDetails.altValue} logoPath={Blog1} id="thumb"/>
            <div className="content_blog">
                <div className="date">
                    <p>{props.blogDetails.blogDateArea} <Link to="#">Design tips</Link></p>
                </div>
                <div className="blog_meta">
                    <h3><Link to="#">{props.blogDetails.blogMeta}</Link></h3>
                </div>
                <p className="blog_text">
                    {props.blogDetails.blogText}
                </p>
            </div>
          </div>
        </div>
    </Wrapper>
  );
}

export default injectIntl(blog);
