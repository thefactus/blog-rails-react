import React, { Component } from "react";
import AppDrawer from "./AppDrawer";
import axios from "axios";
import SimpleTable from "./SimpleTable";

class Posts extends Component {
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
    const title = "Posts";
    const content = <SimpleTable data={this.state.posts} />;

    return (
      <div>
        <AppDrawer title={title} content={content} />
      </div>
    );
  }
}

export default Posts;
