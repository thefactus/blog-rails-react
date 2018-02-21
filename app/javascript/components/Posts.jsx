import React, { Component } from "react";
import PersistentDrawer from "./PersistentDrawer";
import axios from "axios";
import SimpleTable from "./SimpleTable";

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
        _this.setState({ posts: response.data.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  showSettings(event) {
    event.preventDefault();
  }

  render() {
    const title = "Posts";
    const content = <SimpleTable data={this.state.posts} />;

    return (
      <div>
        <PersistentDrawer title={title} content={content} />
      </div>
    );
  }
}

export default Posts;
