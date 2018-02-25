import React, { Component } from "react";
import PersistentDrawer from "./PersistentDrawer";
import Typography from "material-ui/Typography";
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
    const content = (
      <div>
        <dl>
          <dt>
            <Typography>Title</Typography>
          </dt>
          <dd>
            <Typography>Lorem Ipsum</Typography>
          </dd>
          <dt>
            <Typography>Body</Typography>
          </dt>
          <dd>
            <Typography>Lorem Ipsum</Typography>
          </dd>
        </dl>
      </div>
    );

    return (
      <div>
        <PersistentDrawer title={title} content={content} />
      </div>
    );
  }
}

export default PostShow;
