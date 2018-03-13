import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import BlogPostList from "./BlogPostList";
import { stack as Menu } from "react-burger-menu";
import Typography from "material-ui/Typography";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: this.props.data
    };
  }

  showSettings(event) {
    event.preventDefault();
  }

  render() {
    console.log(this.state.posts);
    const posts = this.state.posts;
    const content = posts.map(post => (
      <div key={post.id}>
        <div className="blog-post-title">
          <a href="/">{post.attributes.title}</a>
        </div>
        <div className="blog-post-subtitle">{post.attributes.created_at}</div>
      </div>
    ));

    return (
      <div>
        <Menu>
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="about" className="menu-item" href="/about">
            About
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
          <a onClick={this.showSettings} className="menu-item--small" href="">
            Settings
          </a>
        </Menu>
        <div className="home-wrapper">
          <Sidebar />
          <Content content={content} />
        </div>
      </div>
    );
  }
}

export default Home;
