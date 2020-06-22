import React,{ Component } from 'react';
import { injectIntl } from "react-intl";

import Wrapper from './../../hoc/Wrapper';
import LatestBlogs from "./../../Configs/Blogs";
import SingleBlog from './Blog';

class Blogs extends Component {
  state= {
    blogs:[]
  }

  componentDidMount() {
      this.setState({
        blogs: LatestBlogs
      });
  }

  render() {

    return (
      <Wrapper>
        <div className="our_latest_blog">
          <div className="container">
              <div className="row">
                  <div className="col-xl-12">
                      <div className="section_title text-center mb-100">
                          <h3>{this.props.intl.formatMessage({ id: "BlogsTitle" })}</h3>
                      </div>
                  </div>
              </div>
              <div className="row">
                      {this.state.blogs.map((blog,i) =>
                        <SingleBlog key={i} blogDetails={blog}/>
                      )}
              </div>
          </div>
        </div>
      </Wrapper>
    );
}
}

export default injectIntl(Blogs);
