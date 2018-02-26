import React, { Component } from "react";
import PersistentDrawer from "./PersistentDrawer";
import Typography from "material-ui/Typography";
import axios from "axios";

class PostShow extends Component {
  constructor(props) {
    super(props);
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
            <Typography>{this.props.data.attributes.title}</Typography>
          </dd>
          <dt>
            <Typography>Body</Typography>
          </dt>
          <dd>
            <Typography>{this.props.data.attributes.body}</Typography>
          </dd>
          <dt>
            <Typography>Created at</Typography>
          </dt>
          <dd>
            <Typography>{this.props.data.attributes.created_at}</Typography>
          </dd>
          <dt>
            <Typography>Updated at</Typography>
          </dt>
          <dd>
            <Typography>{this.props.data.attributes.updated_at}</Typography>
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
