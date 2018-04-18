import React, { Component } from "react";
import Typography from "material-ui/Typography";
import Paper from "material-ui/Paper";
import { withStyles } from "material-ui/styles";
import { stack as Menu } from "react-burger-menu";
import Sidebar from "./Sidebar";
import Content from "./Content";

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "",
    color: theme.palette.text.secondary
  }
});

class PostsShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.data
    };
  }

  render() {
    const { classes } = this.props;
    const post = this.state.post;

    console.log(this.state.post);
    const title = "Post";
    const content = (
      <div>
        <div className="post-title">{post.attributes.title}</div>
        <div className="blog-post-subtitle">{post.attributes.created_at}</div>
        <div dangerouslySetInnerHTML={{ __html: post.attributes.body }} />
      </div>
    );

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
          <Content content={content} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PostsShow);
