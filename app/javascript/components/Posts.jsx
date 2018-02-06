import React, { Component } from "react";
import PersistentDrawer from "./PersistentDrawer";
import axios from "axios";

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    let _this = this;
    axios
      .get("/admin/posts.json")
      .then(function(response) {
        _this.setState({ posts: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <PersistentDrawer title="Posts" posts={this.state.posts} />
      </div>
    );
  }
}

export default Posts;
