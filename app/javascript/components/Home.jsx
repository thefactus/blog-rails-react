import React, { Component } from "react";
import Title from "./Title";
import BlogPostList from "./BlogPostList";

class Home extends Component {
  render() {
    let title = "Pablo Bello";

    return (
      <div>
        <div className="home-wrapper">
          <div className="sidebar">
            <div className="left-menu">
              <i className="fa fa-bars fa-lg" aria-hidden="true" />
            </div>
            <div className="blog-title">
              <span>How to Geek</span>
            </div>
          </div>
          <div className="content">
            <div className="blog-post-title">
              <span>Rails + Webpack + React</span>
            </div>
            <div className="blog-post-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget
                massa dolor. Morbi nulla nisl, posuere ut ultrices non, laoreet
                ut nunc. Pellentesque odio tellus, scelerisque quis lacus et,
                blandit laoreet ante. Nunc euismod et dui ut bibendum. Maecenas
                sed turpis justo. Morbi vestibulum scelerisque sapien, at
                commodo enim tempor ut. Duis sagittis at urna sed bibendum. Ut
                porttitor lectus massa, vitae posuere ex mattis vel. Vestibulum
                ultrices cursus tellus eget vulputate. Duis sed placerat tortor.
                Donec molestie sapien erat, eu tincidunt libero ultricies ac.
                Nunc elementum mauris in condimentum tristique. Etiam mattis
                quam orci, egestas sagittis mauris consequat quis. Nam sodales
                interdum ullamcorper. Sed cursus posuere velit ac tempor.{" "}
                <a href="">Read more</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
