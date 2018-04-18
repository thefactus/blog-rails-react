import React, { Component } from "react";
import AppDrawer from "../AppDrawer";
import Typography from "material-ui/Typography";
import Paper from "material-ui/Paper";
import { withStyles } from "material-ui/styles";

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
  }

  render() {
    const { classes } = this.props;

    const title = "Post";
    const content = (
      <div>
        <Paper className={classes.paper}>
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
        </Paper>
      </div>
    );

    return (
      <div>
        <AppDrawer title={title} content={content} />
      </div>
    );
  }
}

export default withStyles(styles)(PostsShow);
