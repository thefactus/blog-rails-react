import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import BlogPostList from "./BlogPostList";
import { stack as Menu } from "react-burger-menu";

class Home extends Component {
  showSettings(event) {
    event.preventDefault();
  }
  render() {
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
          <Content />
        </div>
      </div>
    );
  }
}

export default Home;
