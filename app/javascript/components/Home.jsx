import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import BlogPostList from "./BlogPostList";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="home-wrapper">
          <Sidebar />
          <Content />
        </div>
      </div>
    );
  }
}

export default Home;
