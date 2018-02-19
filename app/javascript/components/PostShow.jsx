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
    return (
      <div>
        <h1>Post Show</h1>
      </div>
    );
  }
}

export default PostShow;
