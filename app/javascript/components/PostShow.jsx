import React, { Component } from "react";
import PersistentDrawer from "./PersistentDrawer";
import axios from "axios";

class PostShow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {}

  showSettings(event) {
    event.preventDefault();
  }

  render() {
    const title = "Post";
    const content = "";

    return (
      <div>
        <PersistentDrawer title={title} content={content} />
      </div>
    );
  }
}

export default PostShow;
